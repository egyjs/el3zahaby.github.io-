function downloadCanvas(link) {
    var pageId =  "page"+ PDFViewerApplication.pdfViewer.currentPageNumber;
    link.href = document.getElementById(pageId).toDataURL();
    link.download = pageId+"png";
    console.log(link);
  //  console.log(btoa(document.getElementById(pageId).toDataURL()));
}
