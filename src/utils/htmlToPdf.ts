import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

/**
 * Converte conteúdo HTML em PDF
 * @param element Elemento HTML a ser convertido
 * @param options Opções de configuração
 * @returns Promise com o objeto jsPDF
 */
export async function htmlToPdf(
  element: HTMLElement,
  options: {
    filename?: string;
    title?: string;
    footer?: string;
    orientation?: 'portrait' | 'landscape';
  } = {}
) {
  const {
    filename = 'download.pdf',
    title = '',
    footer = '',
    orientation = 'portrait'
  } = options;

  try {
    // Capturar o elemento como imagem
    const canvas = await html2canvas(element, {
      scale: 1.5,
      useCORS: true,
      logging: false
    });
    
    // Criar PDF
    const pdf = new jsPDF(orientation, 'mm', 'a4');
    const imgData = canvas.toDataURL('image/png');
    
    // Adicionar cabeçalho se existir
    if (title) {
      pdf.setFontSize(16);
      pdf.setTextColor(50, 50, 50);
      pdf.text(title, 105, 15, { align: 'center' });
    }
    
    // Calcular dimensões para manter proporção
    const imgWidth = orientation === 'portrait' ? 190 : 277;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // Adicionar margens para o título
    const marginTop = title ? 25 : 10;
    pdf.addImage(imgData, 'PNG', 10, marginTop, imgWidth, imgHeight);
    
    // Se for grande demais, ajustar escala e adicionar mais páginas
    if (imgHeight > 250 && orientation === 'portrait') {
      let heightLeft = imgHeight;
      let position = marginTop;
      
      heightLeft -= 250;
      position = 0 - (250 - marginTop);
      
      while (heightLeft > 0) {
        position += 250;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= 250;
      }
    }
    
    // Adicionar rodapé se existir
    if (footer) {
      const pageCount = pdf.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        pdf.setPage(i);
        pdf.setFontSize(10);
        pdf.setTextColor(100, 100, 100);
        pdf.text(footer, 105, 285, { align: 'center' });
        pdf.text(`Página ${i} de ${pageCount}`, 180, 285, { align: 'right' });
      }
    }
    
    return pdf;
  } catch (error) {
    console.error('Erro ao converter HTML para PDF:', error);
    throw error;
  }
}

/**
 * Gera e faz download de um PDF a partir de conteúdo HTML
 */
export async function generateAndDownloadPdf(
  element: HTMLElement,
  options: {
    filename?: string;
    title?: string;
    footer?: string;
    orientation?: 'portrait' | 'landscape';
  } = {}
) {
  try {
    const pdf = await htmlToPdf(element, options);
    pdf.save(options.filename || 'download.pdf');
    return true;
  } catch (error) {
    console.error('Erro ao gerar e baixar PDF:', error);
    return false;
  }
} 