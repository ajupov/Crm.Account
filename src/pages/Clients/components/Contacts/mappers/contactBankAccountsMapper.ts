import ContactBankAccount from '../../../../../../api/contacts/models/ContactBankAccount'

const joinBankAccounts = (categories?: ContactBankAccount[]): string =>
    categories
        ?.map(
            x =>
                `Номер счета: ${x.number}, БИК банка: ${x.bankNumber}, Корреспондентский счет банка: ${x.bankCorrespondentNumber}, Название банка: ${x.bankName}`
        )
        .join(', ') ?? ''

export { joinBankAccounts }
