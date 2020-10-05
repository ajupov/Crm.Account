export function convertObjectToCSV(objectArray: (string[] | Record<string, any>)[]): string {
    let table = ''

    for (const object of objectArray) {
        let row = ''

        for (const property of Object.entries(object)) {
            if (row !== '') {
                row += ','
            }

            row += property[1] ?? ''
        }

        table += row + '\r\n'
    }

    return table
}

export function downloadAsCsv(filename: string, data: string): void {
    const mimeType = 'text/csv;charset=utf-8;'
    const blob = new Blob([data], { type: mimeType })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('download', filename + '.csv')
    link.setAttribute('visibility', 'hidden')

    document.body.appendChild(link)

    link.click()

    document.body.removeChild(link)
}
