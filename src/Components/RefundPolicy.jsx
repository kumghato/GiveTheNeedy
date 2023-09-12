import React, { useEffect } from 'react'

const RefundPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='mt-16 w-[80%] m-auto text-justify leading-loose p-10'>
            <h1 className='text-2xl font-bold text-center'>Refund and Cancellation Policy for Give The Needy App </h1>
            <h5 className='text-lg font-bold leading-10'>Effective Date: 26/08/2023  </h5>
            <p>
                Thank you for your generous intent to donate via the Give The Needy App. Given the nature of our operations and to maintain the spirit of charity, we have established the following refund and cancellation policy:<br />
                <b className='leading-[4rem]'>1. Donations in Kind (e.g., food, clothing, essentials, furniture):</b><br />
                •	Cancellations: If you've scheduled a pickup for a donation and need to cancel, please do so at least 24 hours before the scheduled pickup time. This gives us ample time to notify our logistic partners and reschedule the resources.<br />
                •	No Refunds: As these are donations and not purchases, once the items have been collected, they cannot be returned to the donor.<br />

                <b className='leading-[4rem]'> 2. Monetary Donations:</b><br />
                •	Cancellations & Refunds: If for any reason you made an error in your cash donation or changed your mind about contributing to Give The Needy, we will honour all requests for a refund that are made within 48 hours of the donation. To request a refund, please contact us with the details of the transaction.<br />
                •	After 48 Hours: Refunds after 48 hours of the donation will be made at the discretion of the Give The Needy management.<br />

                <b className='leading-[4rem]'>3. Delivery and Logistics Charges (if any):</b><br />
                •	Cancellation before Pickup: If you cancel the pickup of your donation at least 24 hours before the scheduled time, any charges or fees associated with logistics will be fully refunded.<br />
                •	Cancellation on the Day of Pickup: If you cancel on the day of pickup, a cancellation fee may be applied to cover the costs incurred by our logistics partners.<br />
                •	Failed Pickup: If our logistic partners are unable to pick up your donation due to reasons such as incorrect address, no answer, or any other reason within your control, a fee might be levied to cover their costs.<br />

                <b className='leading-[4rem]'>4. General Provisions:</b><br />
                •	Tax Implications: While we appreciate every donation, please consult with a financial advisor or tax consultant regarding the tax implications of cancelled donations or refunds.<br />
                •	Discrepancies: In case of any discrepancies or concerns about your donation, please reach out to us directly, and we will do our best to address them promptly.<br />

                <b className='leading-[4rem]'>5. Contact Information:</b><br />
                For any concerns, queries, or feedback related to refunds and cancellations, please contact at support@givetheneedy.org.in.<br />
                <b className='leading-[4rem]'>Customer Support</b><br />

                Your generosity powers our mission to empower every livelihood, and we thank you for being a part of this journey. We urge you to carefully consider your contributions, as they make a meaningful difference in someone's life.<br />


            </p>
        </div>
    )
}

export default RefundPolicy