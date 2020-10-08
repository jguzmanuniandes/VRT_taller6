const cy = require('./run_cypress')
const resemble = require('resemblejs')

const fs = require('fs');
const path = require('path')

let compare = async (callback) => {
    cy().then((results) => {
        let img1 = path.resolve(__dirname, '../cypress/screenshots/palette/get_palette.spec.js/imagen1.png')
        let img2 = path.resolve(__dirname, '../cypress/screenshots/palette/get_palette.spec.js/imagen2.png')

        let img1New = path.resolve(__dirname, '../public/images/imagen1_'+Date.parse(results.startedTestsAt)+'.png')
        let img2New = path.resolve(__dirname, '../public/images/imagen2_'+Date.parse(results.startedTestsAt)+'.png')

        fs.renameSync(img1, img1New)
        fs.renameSync(img2, img2New)

        let file1 = fs.readFileSync(img1New)
        let file2 = fs.readFileSync(img2New)

        let diff = resemble(file1).compareTo(file2).onComplete((data) => {
            let diffImg = path.resolve(__dirname, '../public/images/diff_'+Date.parse(results.startedTestsAt)+'.png')
            fs.writeFileSync(diffImg, data.getBuffer())
            callback( { date: results.startedTestsAt, img1New: path.relative('.', img1New), img2New: path.relative('.', img2New), diffImg: path.relative('.', diffImg), data: JSON.stringify(data) } )
        })
    }).catch((error) => {
        throw "Something went wrong with cypress", error
    })

}

module.exports = compare