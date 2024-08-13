

describe('File Upload', () => {
    it.skip('file upload test', () => {
     cy.visit('http://www.automationpractice.pl/index.php?controller=contact')
     //cy.get("input[type='file']").attachFile('C:\\Users\\thinkpad\\Downloads\\img.jpg')
     //cy.get('input[type=file]').click()
     const yourFixturePath = 'image.png'
        cy.get('#fileUpload').attachFile(yourFixturePath)

    })

    it('drag and drop file upload', () => {
        cy.visit('http://css-tricks.com/examples/DragAndDropFileUploading')
        //cy.get("input[type='file']").attachFile('C:\\Users\\thinkpad\\Downloads\\img.jpg')
        //cy.get('input[type=file]').click()
        const yourFixturePath = 'image.png'
           cy.get('#file').attachFile(yourFixturePath)
            cy.get('.box__success').should('contain.text',"Done!")
   
   
       })
  })