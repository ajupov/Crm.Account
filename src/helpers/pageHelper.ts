export function setPageTitle(title: string): void {
    document.title = 'Lite CRM' + (title ? ` - ${title}` : '')
}

export function getPageTitle(): string {
    return document.title.replace('Lite CRM - ', '')
}
