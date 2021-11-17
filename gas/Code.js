const doGet = (e)=>{
    let htmPage = "index"
    if(e.parameter.p=="page"){htmPage="page"}
    const html = HtmlService.createTemplateFromFile(htmPage)
    return html.evaluate()
  }