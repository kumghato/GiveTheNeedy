import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const TermsCondition = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='mt-16 w-[80%] m-auto text-justify leading-loose p-10'>
            < h1 className='text-2xl font-bold text-center'>Terms Of Use for GiveTheNeedy App </h1>
            <p>
                <b className='leading-[4rem]'>1. Introduction</b> <br />

                Welcome to Give The Needy App (“App”, “our”, “we” or “us”). By using our platform, you are agreeing to these <b><em>Terms Of Use</em></b> (“Terms”). Please read them carefully.<br />



                <b className='leading-[4rem]'>2. Eligibility</b> <br />


                You must be at least 18 years old to use our App. By using the App, you represent and warrant that you have the right, authority, and capacity to enter into and abide by these Terms.<br />



                <b className='leading-[4rem]'>3. Description of Service</b> <br />

                Give The Needy App is a platform designed to facilitate charitable donations of food, essentials, clothing, furniture, cash, etc., to individuals in need. We partner with logistics companies to offer delivery services of the donated items to the recipient's doorstep.<br />




                <b className='leading-[4rem]'>4. Donations</b> <br />



                4.1 All donated items must be in usable condition. If you are donating perishable items like food, ensure they are within their consumption date.<br />

                4.2 Cash donations should only be made through our secure payment gateway.<br />

                4.3 We do not guarantee the donation will be used in any specific way by the recipient.<br />

                <b className='leading-[4rem]'>5. Logistic Partners</b><br />



                5.1 Delivery of donations will be facilitated through third-party logistic partners. While we aim to partner with reputable companies, we cannot guarantee the performance or behavior of these third parties.<br />
                5.2 Logistic charges shall be borne by the respective donators as applicable. <br />
                5.3 Any issues related to delivery after dispatch should be addressed directly with the respective logistic partner or in case of any communication issues with the concerned logistic partners please feel free to  <Link to={"/contact"} className='text-blue-400 hover:underline cursor-pointer'>Contact us</Link>.<br />

                <b className='leading-[4rem]'>6. Limitation of Liability</b><br />

                We are only a platform to facilitate donations. We are not responsible for the quality, safety, legality, or any other aspect of the items donated or the actions of the users.<br />



                <b className='leading-[4rem]'>7. Termination</b><br />

                We reserve the right to terminate or suspend access to our App without prior notice for any user who violates these Terms or uses the App in a manner that we deem inappropriate.<br />



                <b className='leading-[4rem]'>8. Privacy Policy</b><br />

                By using the App, you agree to the terms of our Privacy Policy, which is incorporated into these Terms. Please review our Privacy Policy to understand our practices.<br />



                <b className='leading-[4rem]'>9. Dispute Resolution</b><br />

                Any disputes arising out of the use of our App will be governed by the laws of the jurisdiction in which the App was created. By using the App, you agree to the exclusive jurisdiction of said courts.<br />



                <b className='leading-[4rem]'>10. Changes to These Terms</b><br />

                We reserve the right to modify these Terms at any time. We will endeavor to provide notice of any significant changes, but it's your responsibility to review these Terms periodically.<br />



                <b className='leading-[4rem]'>11. Indemnity</b><br />

                You agree to indemnify and hold us harmless from any claim or demand, including attorneys' fees, arising out of your use of the App, your violation of these Terms, or your violation of any rights of a third party.<br />



                <b className='leading-[4rem]'>12. No Warranty</b><br />

                The App is provided “as is” and without any warranty of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.<br />


                <b className='leading-[4rem]'>13. Payment terms</b><br />
                For each cash transaction, payment gateway fee of 3%, and a processing fee of 2% will be charged from the amount donated.<br />


                <b className='leading-[4rem]'>13. Contact</b><br />

                For any queries or clarifications regarding these Terms, please contact us at support@givetheneedy.org.in.<br />

                By using Give The Needy App, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.<br />

            </p>
        </div>
    )
}

export default TermsCondition