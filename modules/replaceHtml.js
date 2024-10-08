const replaceHtml = (template,product) => {
    let output = template.replace('{{phonename}}', product.phonename)
    output = output.replace('{{price}}', product.price)
    output = output.replace('{{size}}', product.size)
    output = output.replace('{{rom}}', product.rom)
    output= output.replace('{{ram}}',product.ram)
    output = output.replace('{{camerapixel}}',product.camerapixel)
    output = output.replace('{{id}}', product.id)
    return output
}
module.exports = replaceHtml


