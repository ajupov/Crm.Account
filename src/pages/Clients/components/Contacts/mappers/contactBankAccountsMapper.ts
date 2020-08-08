import ContactBankAccount from '../../../../../../api/contacts/models/ContactBankAccount'

const joinBankAccounts = (accounts?: ContactBankAccount[]): string =>
    accounts
        ?.map(
            () =>
                accounts
                    ?.map(x => `${x.number}, БИК банка: ${x.bankNumber}, Название банка: ${x.bankName}`)
                    .join(', ') ?? ''
        )
        .join(', ') ?? ''

export { joinBankAccounts }
