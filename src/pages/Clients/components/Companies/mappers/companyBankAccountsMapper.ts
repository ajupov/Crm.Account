import CompanyBankAccount from '../../../../../../api/companies/models/CompanyBankAccount'

const joinBankAccounts = (accounts?: CompanyBankAccount[]): string =>
    accounts
        ?.map(
            x =>
                `Номер счета: ${x.number}, БИК банка: ${x.bankNumber}, Корреспондентский счет банка: ${x.bankCorrespondentNumber}, Название банка: ${x.bankName}`
        )
        .join(', ') ?? ''

export { joinBankAccounts }
