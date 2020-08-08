import CompanyBankAccount from '../../../../../../api/companies/models/CompanyBankAccount'

const joinBankAccounts = (accounts?: CompanyBankAccount[]): string =>
    accounts?.map(x => `${x.number}, БИК банка: ${x.bankNumber}, Название банка ${x.bankName}`).join(', ') ?? ''

export { joinBankAccounts }
