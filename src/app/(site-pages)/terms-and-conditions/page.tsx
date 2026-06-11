import styles from "@/app/legal.module.css";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import pageStyles from "@/app/page.module.css";

export const metadata = {
  title: "Terms and Conditions | Beeclue Tech",
  description: "Understand the obligations and rights outlined in Beeclue's Terms and Conditions for using our services.",
};

export default function TermsAndConditions() {
  return (
    <main className={pageStyles.main} style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(10px)" }}>
      
      <FadeIn className={styles.legalContainer}>
        <h1>Terms and Conditions</h1>
        <p>This Services Agreement (the "Agreement") contains the complete terms and conditions which govern your subscription of Software Development, Website Development, Logo Designing, Mobile Application Development (Android & IOS), Business Cards & Brochures, (the Services) subject to change from time to time provided by "Beeclue" to the Client, in conjunction with any relevant quotation provided to the Client by Beeclue (Terms), unless otherwise agreed in writing.</p>
        <p>The following terms and conditions apply to all services provided by Beeclue to the Client.</p>

        <h2>Acceptance</h2>
        <p>It is not necessary for any Client to have signed an acceptance of these terms and conditions for them to apply. If a Client accepts a quote, then the Client will be deemed to have satisfied themselves as to the terms applying and have accepted these terms and conditions in full.</p>

        <h2>The Project</h2>
        <p>In consideration of the Client paying the Beeclue the relevant Fees (as set out in the Project Proposal), the Beeclue shall:</p>
        <ol>
          <li>Develop the services in accordance with the Client requirements set out in the Project Proposal on behalf of the Client (the "Project"); and</li>
          <li>Where agreed between the parties, provide the Services to the Client.</li>
          <li>The Project Specification can be found in Project Proposal document.</li>
          <li>Any amendment or variations to the Project Specification must be made in writing and agreed between the Parties. Where one Party does not agree with the proposed amendment or variation, the Parties shall meet via online and discuss the proposed changes in good faith. Where any changes to the Project Specification would result in additional expense to the Beeclue over and above the Fees as outlined in the proposal, the Beeclue shall be entitled to charge the Client for the additional expenses at its standard rates from time to time.</li>
        </ol>

        <h2>Delivery and Acceptance</h2>
        <ol>
          <li>Upon completion of the Project, the Client shall make full payment of the fees to the Beeclue upon which the Beeclue shall make live or deploy the completed website to the third-party hosting server and the Beeclue reserves the right to charge additional fees to the Client for this service.</li>
          <li>If the Client requires the completed website to be loaded onto Client's hosting services provided by the client, the Client is responsible for ensuring that the intended fileserver or disk space is properly configured.</li>
          <li>Once the Beeclue has delivered the website to the Client, the Client shall have a period of 14 working days (the "Acceptance Test Period") to test the Website to ensure it conforms to the Project Specification (the "Acceptance Test"). Acceptance of the Website may only be withheld by the Client if it can demonstrate that the Website does not conform materially to the Project Specification. Upon completion of the Acceptance Test, the Client shall confirm to the Beeclue that the Project is complete (the "Project Release").</li>
          <li>Acceptance of the Website shall be deemed to have taken place upon the occurrence of any of the following events:
            <ul>
              <li>the expiry of the Acceptance Test Period and the Client has not raised with the Beeclue any material differences between the Website and the Project Specification;</li>
              <li>the Client uses any part of the Website other than for test purposes.</li>
            </ul>
          </li>
          <li>Upon receipt of the Project Release or deemed acceptance, the Beeclue shall have no further obligations to undertake any work in relation to the Project. The Client may however request that the Beeclue undertake further work relating directly or indirectly to the Project. If it agrees to undertake such work, the Beeclue reserves the right to charge the Client for any additional work carried out at its commercial rate at that time.</li>
        </ol>

        <h2>Delivery of Content, Materials and Feedback</h2>
        <ol>
          <li>The Client undertakes to deliver to the Beeclue all content, data, images and other information and all trademarks, trade names, logos and other branding of the Client (the "Customer Content") required for the Project.</li>
          <li>The Client acknowledges that the Beeclue's ability to complete the Project is dependent upon the full and timely co-operation of the Client and the Client undertakes to notify the Beeclue promptly in writing of any delays in delivering the Client Content or specification input. Where the Client has notified the Beeclue of any delay, the Client will provide the Beeclue with a revised timetable for supplying such Client Content or input.</li>
          <li>The Beeclue will not be responsible for any delays, missed milestones (where specified in the Project) or additional expenses incurred due to the late delivery or non-delivery of the Client Content or input where required by the Beeclue for the Project.</li>
        </ol>

        <h2>Fees and Payment</h2>
        <ol>
          <li>The Client will pay the Project fees set out in the Project Proposals Payment Schedule (the "Fees") to the Beeclue.</li>
          <li>Notwithstanding any specific payment milestones set out in the Project Specification, the Fees shall by payable by the Client in the following instalments:
            <ul>
              <li>50% of the Fees estimated in proposal to be paid at least 5 days before commencement of the Project by the Beeclue;</li>
              <li>remainder of the Estimated Fees to be paid on completion (before or on go live); and</li>
              <li>any outstanding balance of the development Fees to be paid no later than 10 days after the expiry of the Acceptance Test Period.</li>
            </ul>
          </li>
          <li>The Client shall make all payments due in full without any deduction whether by way of set-off, counterclaim, discount, abatement or otherwise.</li>
          <li>Without prejudice to any other right or remedy that the Beeclue may have, if the Client fails to pay the Fees on the due date, the Beeclue may, at its option:
            <ul>
              <li>claim interest at its discretion on any unpaid amounts under the Late Payment of Commercial Debts (Interest) Act;</li>
              <li>suspend the Project until payment has been made in full;</li>
              <li>disable the Website in whole or in part until payment has been made in full; or</li>
              <li>terminate this Agreement immediately upon notice.</li>
            </ul>
          </li>
          <li>All invoices are sent to the Client via email to the Client's specified email address. The Client will notify the Beeclue of any changes to the invoicing address.</li>
          <li>The Beeclue will return the Deposit to the Client, if the project does not go ahead on account of the Beeclue. If works have already commenced, and the contract is cancelled by the Client, the deposit will be returned minus costs for works completed.</li>
        </ol>

        <h2>Domain names and Hosting</h2>
        <ol>
          <li>The Beeclue can, at its own discretion, but is not obliged to, offer domain name registration and hosting via a third-party service.</li>
          <li>The Client agrees that registration of a domain name does not provide an endorsement of the right to use the name. The Client is responsible for ensuring they have due title to the domain name. The Beeclue holds no liability and the Client hereby agrees to indemnify and hold harmless the Beeclue from any claim resulting from the Client's registration of a domain name.</li>
          <li>The domain name is registered in the Client's own name, with the address and contact details of the Beeclue. The Client should be aware that a domain name is registered with a third party and as such the Client shall agree to fully abide by the terms and conditions set out by the third party for such services.</li>
          <li>The Client agrees to take all legal responsibility for use of third-party domain name and hosting services and supply truthful details to the third-party services.</li>
          <li>The Client is liable to pay the Beeclue for any domain name registrations and the initial set-up of the hosting if included as part of the website build.</li>
          <li>Any support relating to the domain name, hosting and email services are between the Client and the third-party service.</li>
          <li>Any other domain name and hosting services or costs not included by the Beeclue, including but not limited to further domain name registration fees, domain name transfer charges, yearly domain name renewals, hosting charges, yearly hosting renewals, hosting upgrades, extra disk space, bandwidth and any other related or hidden charges, are to be paid by the Client to the third-party services.</li>
          <li>The Client agrees to pay the domain name and hosting fees as soon as required by the third party. Any modifications needed to the domain name or hosting services are to be made between the Client and third-party service.</li>
          <li>The Client agrees that if at any time their contact details, including email address, change, it is their responsibility to contact the third party and update their contact details. Failure to do so may mean that renewal invoices for the domain name and hosting services are not received by the Client.</li>
          <li>Payment for a domain name and hosting services is to be made immediately upon receipt of an invoice from the third-party service. Failure to comply with the payment terms may result in the Client's domain name becoming available to another party and/or the website and email services becoming unavailable.</li>
          <li>The Client agrees to pass on FTP details and any other access details relating to their domain name and hosting account that the Beeclue requires uploading the website if required as part of a project.</li>
          <li>The Beeclue reserves the right without notice to cancel, reject or refuse work with domain names or hosting services without reason for such rejection or refusal.</li>
          <li>The Client agrees to be liable for their use of the domain name, hosting and email services with the third party and hereby agrees to indemnify and hold harmless the Beeclue from any claim resulting from the Client's publication of material and use of the domain name, hosting and email services. The Client agrees to take full responsibility for all usage of the domain name, hosting and email services and to fully abide by the terms and conditions set out by the third party for such services.</li>
        </ol>

        <h2>Intellectual Property Rights</h2>
        <ol>
          <li>The Client grants to the Beeclue a non-exclusive, revocable, royalty-free licence to use and reproduce the Client Content solely for the purpose of performing its obligations under this Agreement.</li>
          <li>Upon full payment, the website design, software and coding produced by the Beeclue in respect of the Website (excluding any Client Content) (the "Beecule Materials") will be agreed within the signed proposal.</li>
          <li>The Client undertakes not to access, modify, alter all or part of the Beeclue Materials with a view to creating a separate website or licensing the Website to a third party or diminish the design and function of the Website, without the prior written consent of the Beeclue.</li>
          <li>The Beeclue can register and renew domain names on behalf of and as requested by the Client. Fees and expenses incurred in registration and/or renewal will be included as part of the Fees. On payment of the Fees and delivery of the Project Release by the Client, the Beeclue undertakes to transfer all registration details for the Website, including but not limited to technical and administrative details, to the Client if requested.</li>
        </ol>

        <h2>Warranties</h2>
        <ol>
          <li>Each party warrants that it has full power and authority to enter into and perform this Agreement.</li>
          <li>The Beeclue warrants that it will perform its obligations under this Agreement with reasonable skill, care and diligence and that the Client's use of the Beeclue Materials will not infringe any third party intellectual property rights.</li>
          <li>The Client warrants that it, or its licensors, is the owner of any intellectual property rights in the Client Content and that the Client has authority to use the Client Content in relation to the Website and that the Beeclue's use of the Client Content in accordance with this Agreement will not infringe any third-party intellectual property rights.</li>
          <li>The Client confirms that to the best of their knowledge and belief that the Client Content does not contain anything which may reasonably be considered blasphemous, defamatory or obscene and do not breach any applicable law or regulation.</li>
          <li>Save as expressly provided in this Agreement, all warranties, conditions, or other terms implied by statute, common law or otherwise are excluded.</li>
        </ol>

        <h2>Indemnities and Limitation of Liability</h2>
        <ol>
          <li>The Beeclue shall have no liability for any loss or damage caused to the Client due to:
            <ul>
              <li>(a) any network failure and/or inability on the part of the Client to access the Website due to a problem with the Internet and/or any telecommunications network;</li>
              <li>(b) any viruses, worms, Trojan horses or other similar devices.</li>
            </ul>
          </li>
          <li>The Client shall indemnify and keep the Beeclue fully indemnified against any and all third-party claims of infringement of intellectual property rights affecting the Client Content or the Hosting Services.</li>
          <li>The Client acknowledges that it is for the Client to ensure that the Website does not infringe the laws of any jurisdiction within which it is actively promoted.</li>
          <li>From time-to-time governments enact laws and levy taxes and tariffs affecting Internet electronic commerce. The client agrees that the client is solely responsible for complying with such laws, taxes, and tariffs, and will hold harmless, protect, and defend Beeclue and its subcontractors from any claim, suit, penalty, tax, or tariff arising from the client's exercise of Internet electronic commerce.</li>
        </ol>

        <h2>Design Credit</h2>
        <p>A link to Beeclue will appear in either small type or by a small graphic at the bottom of the Client's website. If a graphic is used, it will be designed to fit in with the overall site design. The Client also agrees that the website developed for the Client may be presented in Beeclue's portfolio.</p>

        <h2>Termination</h2>
        <ol>
          <li>If the Client is not taking services from the Beeclue, this Agreement will terminate automatically upon delivery of the Project Release to the Beeclue, unless otherwise extended by the Parties in writing. Otherwise, this Agreement shall continue unless or until terminated by either Party in accordance with the terms of this Agreement.</li>
          <li>Either Party may terminate the Agreement immediately in the event that the other Party:
            <ul>
              <li>(a) commits a material or persistent breach of its obligations under this Agreement which is incapable of remedy (and non-payment shall be deemed a material breach);</li>
              <li>(b) fails to remedy a breach of any of its obligations under this Agreement, where it is capable of remedy, or persists in any breach of any of its obligations under this Agreement after having been required in writing to remedy or desist from such breach within a period of 30 days;</li>
              <li>(c) makes or proposes any voluntary agreement or enters into a compromise for the benefit of its creditors;</li>
              <li>(d) being a company, becomes subject to an administration order or goes into liquidation, (other than for the purpose of amalgamation or reconstruction);</li>
              <li>(e) has a receiver appointed to administer any of its property or assets</li>
              <li>(f) ceases or threatens to cease to carry on business.</li>
            </ul>
          </li>
          <li>On the termination of the Agreement other than mentioned above, the Client undertakes to return promptly any test examples of the Website and any document, manuals or other printed materials which have been delivered to the Client by the Beeclue and to return or destroy any copies thereof (as requested by the Beeclue).</li>
          <li>Any termination of the Agreement shall be without prejudice to any rights accrued in favour of either Party and will not affect those provisions of the Agreement which are by their construction intended to survive such termination.</li>
        </ol>

        <h2>Confidentiality</h2>
        <ol>
          <li>Each Party undertakes that it shall not at any time during this Agreement, and for a period of 2 years after completion of the Project, disclose to any person any confidential information concerning the business, affairs, trade secrets, technical, commercial, financial, operational, marketing or promotional information or data of either Party or the terms of this Agreement, except as may be required by law, court order or any governmental or regulatory authority.</li>
          <li>Neither Party shall use the other Party's confidential information for any purpose other than to perform its obligations under this Agreement.</li>
        </ol>

        <h2>Notice</h2>
        <ol>
          <li>Any notice given by either Party must be in writing and must be delivered personally through email ID's provided by that Party.</li>
          <li>All communications relating to the Project between the Parties may be sent by email and will be deemed to have been received when sent.</li>
        </ol>

        <h2>Force Majeure</h2>
        <p>Neither Party shall be liable for delay or failure to perform any obligation under this Agreement if the delay or failure is caused by any circumstances beyond its reasonable control, including but not limited to acts of god, war, civil disorder or industrial dispute. If such delay or failure continues for a period of at least 90 days, the Party not subject to the force majeure shall be entitled to terminate the Agreement by notice in writing to the other.</p>

        <h2>Joint Venture or Partnership</h2>
        <p>Nothing in the Agreement shall be construed as creating a partnership, joint venture or an agency relationship between the Parties and neither Party shall have the authority or power to bind the other Party or to contract in the name of or create a liability against the other Party.</p>

        <h2>General</h2>
        <ol>
          <li>Failure or delay by either Party to enforce any right or remedy under the Agreement shall not to be taken as or deemed to be a waiver of that right or remedy, unless the waiving party acknowledges the waiver in writing. Waiver of a breach of any term of this Agreement shall not operate as a waiver of breach of any other term or any subsequent breach of that term.</li>
          <li>If any provision of this Agreement is or becomes illegal, invalid or unenforceable in any jurisdiction, that shall not affect the legality, validity or enforceability in that jurisdiction (or in any other jurisdiction) of any other provision of this Agreement.</li>
          <li>No addition to or modification of any clause in the Agreement shall be binding on the Parties unless made by in writing and signed by both Parties.</li>
          <li>This Agreement constitutes the entire agreement and understanding of the Parties in respect of the subject matter of this agreement and supersedes and extinguishes any prior agreements, undertakings, promises or conditions between the Parties relating to the subject matter. Each party acknowledges to the other that it has not been induced to enter into this Agreement nor has it relied upon any representation, promise, assurance, warranty or undertaking not contained in this Agreement.</li>
          <li>A person who is not a party to this Agreement has no rights to enforce, or to enjoy the benefit of, any provision of this Agreement.</li>
        </ol>

        <h2>Jurisdiction</h2>
        <p>This Agreement and any dispute or claim arising out of or in connection with it (including non-contractual claims or disputes) shall be interpreted construed and enforced in accordance with Indian law and shall be subject to the exclusive jurisdiction of the Amritsar District Courts.</p>

        <h2>Updates and Revision</h2>
        <p>At Beeclue, we constantly update our website to serve you better. We may also modify our terms and conditions without any prior notice. Modifications are with immediate effect once they are posted on the website. On visiting our website, you are accepting our Terms and Conditions of using our website.</p>
        <p>Last updated: February 07, 2023</p>
      </FadeIn>
    </main>
  );
}
