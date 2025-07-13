import fs from 'fs'
import path from 'path'

const directoryPath = 'node_modules/' // Укажите путь к вашей папке

function countFiles(dir) {
  let fileCount = 0

  fs.readdir(dir, (err, files) => {
    if (err) {
      return console.error('Ошибка при чтении директории:', err)
    }

    files.forEach((file) => {
      const filePath = path.join(dir, file)
      if (fs.statSync(filePath).isFile()) {
        fileCount++
      }
    })

    console.log(`Количество файлов в папке "${dir}": ${fileCount}`)
  })
}

countFiles(directoryPath)
