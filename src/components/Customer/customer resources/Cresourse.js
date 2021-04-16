import React from "react";
import "./Cresource.css";
import achievement from  "../../../assets/Partners Logos-01.jpg"
import client from "../../../assets/Achievements (3).jpg"
import map from "../../../assets/Achievements (1).jpg"
// import achievement from  "../../../../assets/Partners Logos-01.jpg"
// import client from "../../../../assets/Achievements (3).jpg"
// import map from "../../../../assets/Achievements (1).jpg"

const Cresourse = () => {
  return (
    <div className="customer-resource">
      <div className="accordionMenu">
        <input type="radio" name="trg1" id="acc1" checked="checked" />
        <label for="acc1">Resource Formulas</label>
        <div className="content">
          <div className="inner">
            <h5>
              {" "}
              Learn to Calculate Chargeable Weight for Air & Sea Freight
              Shipments
            </h5>
            <p>
              As Freight forwarders we do not use gross weight or volume weight
              of the cargo but the chargeable weight when calculating freight
              cost?
            </p>
            <p>What is chargeable Weight?</p>
            <p>
              To help us answer this question, we must look at what nature of
              goods are shipped. Is it not true that some goods are heavy but
              take very limited space; whereas others are light but take lots of
              space in the room during transportation.
            </p>

            <p>
              Imagine a shipment of cotton and steel. It is obvious that a
              cotton shipment will occupy more space compared to a steel
              shipment. However, a steel shipment will be weighing more. Should
              both be charged using volume Weight?
            </p>
            <h5>What is the Industry practice?</h5>
            <p>
              They choose the higher value between the volumetric weight and the
              actual weight of the cargo. This is fair enough because cotton
              shipments will occupy more space while steel shipments will weigh
              more. In both cases, shippers will be choosing the measurement
              with greater value.
            </p>
            <h5>How do we calculate the Chargeable Weight?</h5>
            <h6>Download Formula</h6>
            <p>
              To understand the definition of light goods and heavy goods, we
              need to know what is the actual gross weight, volume weight, and
              chargeable weight.
            </p>
            <p>
              <strong>Firstly, the actual weight:</strong>
            </p>
            <p>
              Actual Weight, which is the weight obtained from weighing
              (overweight), including Gross Weight (G.W.) and Net Weight (N.W.).
              The most common is the actual gross weight.
            </p>
            <p>
              In air cargo transportation, the actual gross weight is often
              compared to the calculated volumetric weight, whichever is
              calculated and charged.
            </p>
            <p>
              <strong>Secondly, the volume weight</strong>
            </p>
            <p>
              Volume Weight, also named as Volumetric Weight or Dimensions
              Weight, which is the weight calculated from the volume of the
              cargo according to a certain conversion factor or calculation
              formula.
            </p>
            <p>
              In air cargo transportation, the calculation factor for
              calculating the volumetric weight is generally 1:167, that is, one
              cubic meter is equal to about 167 kilograms.
            </p>
            <p>
              For example, the actual gross weight of an air cargo shipment is
              95 kg, and the volume is 1.2 cubic meters. Calculated according to
              the coefficient of air transportation 1:167, the volume weight of
              this cargo is 1.2*167=200.4 kg, which is greater than the actual
              gross weight of 95 kg, so this cargo (also called soft, light
              goods, English called Light Weight Cargo or Light Cargo/Goods or
              Low Density Cargo or Measurement Cargo), air transport will be
              charged by volume, not actual gross weight.
            </p>
            <p>
              Another example: the actual gross weight of a shipment air cargo
              is 560 kg, the volume is 1.5 CBM, calculated according to the
              coefficient of air transport 1:167, the volume weight of the
              ticket is 1.5 * 167 = 250.5 kg, less than the actual gross weight
              of 560 kg, so this cargo is named as heavy goods (English called
              Heavy Cargo/Goods or High Density Cargo), the airline companies
              will charge according to the actual gross weight, not the volume
              weight.
            </p>
            <p>
              In short, according to a certain conversion coefficient, calculate
              the volume weight, and then compare the volume weight with the
              actual weight, whichever is larger will be charged according to
              that.
            </p>
            <p>
              <strong>Thirdly, the chargeable weight</strong>
            </p>
            <p>
              Chargeable Weight, referred to as C.W., which is used to calculate
              the weight of freight or other miscellaneous charges.
            </p>
            <p>
              The chargeable weight is either the actual gross weight or the
              volume weight, the chargeable weight = the actual weight VS the
              volume weight, and the larger one is the weight for calculating
              the shipping cost.
            </p>
            <p>How does air freight company calculate volumetric weight?</p>
            <p>
              Regular items:
              <br />
              Length (cm) x width (cm) x height (cm) ÷ 6000 = volumetric weight
              (KG), ie 1 CBM ≈ 166.6666 KG.
              <br />
              Irregular items:
              <br />
            </p>
            <p>
              Irregularly Shaped Air Freight Shipment
              <br />
              The longest (cm) x widest (cm) x highest (cm) ÷ 6000 = volumetric
              weight (KG), ie 1 CBM ≈ 166.666667 KG.
              <br />
              This is an internationally accepted algorithm.
              <br />
            </p>
            <p>
              In short, 1 cubic meter of weight greater than 166.67 kilograms is
              called heavy cargo, and less than 166.67 kilograms is called foam
              cargo in China. Heavy goods are charged according to the actual
              gross weight, and the foamed goods are charged according to the
              volumetric weight.
            </p>
            <p>
              <strong>Regularly Shaped Air Freight Shipment</strong>
            </p>
            <p>
              The gross weight of an air shipment can be higher in value
              compared to its volumetric weight. This makes it the chosen
              chargeable weight for the cargo as shown in the below example.
              <br />
              Shipment measurement:
              <br />
              Length (l) = 80cm
              <br />
              Width (w) = 20cm
              <br />
              Height (h) = 45cm
              <br />
              Gross Weight = 5Kgs
              <br />
            </p>
            <p>
              Step 1; Calculate the volume weight of the air freight shipment
              <br />
              Volume weight= length X width X height
              <br />
              = 80cm x 20cmx 45cm
              <br />
              = 11.4Kg
              <br />
            </p>
            <p>
              Step 2; Compare the gross weight with the volumetric weight
              <br />
              volumetric weight vs gross weight = 11.4 kgs vs 9.5kgs
              <br />
              Chargeable weight is the greater value which is 11.4 kgs.
              <br />
            </p>
            <p>
              How does express courier (DHL, UPS, FedEx, TNT) calculate
              volumetric weight?
              <br />
              Express Courier calculation methods:
              <br />
              There are three ways to measure the volume in practice:
              <br />
            </p>
            <ol>
              <li>
                standard package measurement method:
                <br />
                The package is with a standard carton size,
                <br />
                The volume is calculated according to the length, height and
                width of the carton.
                <br />
                For example, DHL channel, package length 15cm, width 30cm,
                height 20cm,
                <br />
                Then the volume weight = (15 × 30 × 20) / 5000 = 1.8KG,
                <br />
                The actual weight is 1.2KG,
                <br />
                Then the parcel is calculated by the weight of 1.8KG.
                <br />
                The final chargeable weight is 2KG.
                <br />
              </li>

              <li>
                surface package measurement method:
                <br />
                If the package is squeezed by the goods, the plane of the box
                expands and deforms,
                <br />
                Then calculate according to the longest side of the package.
                <br />
                For example, DHL channel, the actual length of the carton is
                15cm, 30cm, and 20cm;
                <br />
                Due to the extrusion of the goods, the length is 18cm, 33cm, and
                22cm after sealing.
                <br />
                Then the volume weight = (18 × 33 × 22) / 5000 = 2.7 KG,
                <br />
                The actual weight is 2KG,
                <br />
                Then the package calculates the shipping cost by the volume of
                2.7KG.
                <br />
                The final billing weight is 3KG.
                <br />
              </li>

              <li>
                irregular package measurement method:
                <br />
                Due to the actual size of the goods, it needs to be packaged
                into irregular packages.
                <br />
                Then the package is calculated according to the longest side and
                the volume is heavy.
                <br />
                Example: such as the UPS channel,
                <br />
                Irregular parcels have a maximum length of 15cm, a maximum
                length of 40cm, and a maximum height of 25cm.
                <br />
                Then the volume weight= (15 × 40 × 25) / 5000 = 3KG,
                <br />
                The actual weight is 2KG,
                <br />
                Finally, the package calculates the shipping cost by the volume
                weight of 3KG.
                <br />
              </li>
            </ol>
            <p>
              However, what customers often overlook is the design of the box
              itself. The size indicated on the box is the inner diameter of the
              box, it does not contain the thickness of the paper, but actual
              shipment is measured by the outer dimensions of the box.
            </p>
            <h5>Precautions:</h5>
            <ol>
              <li>
                CBM is the abbreviation of Cubic Meter, which means cubic meter.
              </li>
              <li>
                2. Only the express (DHL, FedEx, TNT, UPS, Aramex) company uses
                this algorithm length (cm) × width (cm) × height (cm) ÷ 5000 to
                calculate the volume weight.
              </li>
              <li>
                3. In order to make full use of the space and load capacity of
                the airplane, the heavy cargo and the light cargo will generally
                be reasonably matched. The air cargo loading is a technical
                activity – well matched, can make full use of the limited space
                of the aircraft, and if do well, it can greatly increase the
                extra profit. If there are too many heavy goods, it will waste
                space (it will be overweight without filling the space). Too
                much cargo will waste the load (filled with the maximum weight).
              </li>
            </ol>
            <h5>Sea Shipping calculation method:</h5>
            <ol>
              <li>
                1. The division of heavy goods and light goods by sea is much
                simpler than that of air transportation. China’s sea freight
                consolidation business basically divides heavy goods and light
                goods according to the standard of 1 cubic meter equal to 1 ton.
                In the LCL ocean freight, heavy goods are rare, basically light
                goods, and shipping LCL is calculated according to the volume of
                freight, compared with air transport according to the weight of
                the freight is fundamentally different, so it is much simpler.
                Many people have done a lot of shipping, but have never heard of
                light goods and heavy goods, because they are basically not
                used.
              </li>
              <li>
                2. According to the stowage of the ship, any cargo with a cargo
                stowage factor less than the ship’s capacity factor is called
                Heavy Weight Cargo; any cargo with a cargo stowage factor
                greater than the ship’s tank capacity is called Measurement
                Cargo/Light Goods.
              </li>
              <li>
                3. According to the calculation of freight aspect and
                international shipping business practices, any cargo with a
                stowage factor of less than 1.1328 m3/ton or 40 cubic feet/ton
                is called heavy cargo; where the cargo stowage factor is greater
                than 1.1328 m3/ton or 40 Cubic feet per ton of cargo, called
                light goods / foamgoods.
              </li>
              <li>
                4. The concept of heavy goods and light goods is closely related
                to stowage, transportation, storage and billing. The carrier or
                freight forwarder company distinguishes heavy goods, light
                goods/foam goods according to certain standards.
              </li>
            </ol>

            <p>
              Do you need any assistance moving your cargo either via air or
              sea? We are happy to help you, so contact us now and send a
              message.
            </p>
          </div>
        </div>

        <input type="radio" name="trg1" id="acc2" />
        <label for="acc2">Terms and condition</label>
        <div className="content">
          <div className="inner">
            <h4>CONCLUSION OF CONTRACT</h4>
            <h5>Electronic Communication </h5>
            <ul>
              <li>
                1.1 Customer and Nine Forty Air Cargo Limited communicate with
                each other electronically and acknowledge and agree that
                electronic communication (e.g. by Email, Fax, Internet and other
                electronic means) is a proper means for concluding contracts and
                agree not to contest the validity of contracts on the basis (1)
                that they were concluded by electronic communication, (2) that
                the original records are in electronic form, or (3) that no
                signature(s) evidence such contracts. Offer and Acceptance
              </li>
              <li>
                1.2 Pricing and booking information provided via the quotation
                does not constitute binding offers on the part of Nine Forty Air
                Cargo Limited.
              </li>

              <li>
                1.3 Quotes are the result of ad-hoc calculations based on the
                Services requested by Customer in accordance with the Shipment
                information provided by Customer. The pricing shown on a quote
                is related to the particularly requested service package and is
                valid for the period stated during the quoting process. A quote
                provided by Nine Forty Air Cargo Limited does not include
                confirmation of details such as but not limited to a particular
                traffic routing and the use of particular subcontractors and/or
                agents, nor does it make any representation regarding
                availability of the Service at any particular point in time.
              </li>
              <li>
                1.4 The Shipment information provided by Customer during the
                quotation and booking process equally has no legally binding
                effect, until Customer places the booking which will complete
                the Customer’s order and will constitute a legally binding
                offer.
              </li>

              <li>
                1.5 In due course Nine Forty Air Cargo Limited will send via
                email an acceptance or rejection of the offer. An acceptance of
                the offer will lead to a legally binding contract between
                Customer and Nine Forty Air Cargo Limited. In the absence of a
                written email acceptance, a legally binding contract still comes
                into existence if (a) Nine Forty Air Cargo Limited commences the
                performance, and (b) an email acceptance by Nine Forty Air Cargo
                Limited is not expected according to customary practice. Upon
                conclusion of a legally binding contract, any cancellation of
                the Services by Customer does not release from agreed duties and
                obligations.
              </li>
            </ul>

            <h5>Contracting Parties </h5>
            <ul>
              <li>
                2.1 The contract is being concluded between Customer on the one
                part and Nine Forty Air Cargo Limited on the other part. The
                relevant operating entity of Nine Forty Air Cargo Limited
                performing the Services is the solely responsible entity towards
                Customer. For the avoidance of doubt the members of the Nine
                Forty Air Cargo Limited Group cannot be held jointly and
                severally liable.
              </li>

              <li>
                2.2 To the extent legally mandatory or permitted by relevant
                law, the recipient of the Shipment may also have certain rights
                relating to the transaction.
              </li>
            </ul>

            <h5>TRANSPORTATION AND HINDRANCES</h5>

            <ol>
              <li>
                3.1 Nine Forty Air Cargo Limited shall carry out its Services
                with skill and care and in accordance with Customer’s
                instructions as agreed. If Customer’s instructions or required
                documentation are inaccurate, incomplete, or, in any way, not in
                accordance with the contract, Nine Forty Air Cargo Limited may
                at Customer’s risk and expense act as it reasonably deems fit
                and Customer shall indemnify and hold Nine Forty Air Cargo
                Limited harmless from any related claims, costs, liabilities and
                expenses.
              </li>
              <li>
                3.2 If at any time Nine Forty Air Cargo Limited’s performance is
                or is likely to be affected by any hindrance or risk of any kind
                (including the conditions of the Shipment) not arising from any
                fault or neglect of Nine Forty Air Cargo Limited and which
                cannot be avoided by the exercise of reasonable endeavours, Nine
                Forty Air Cargo Limited shall be exempt from its obligations
                under the respective contract and, where reasonably possible,
                make the Shipment or any part of it available to Customer or any
                other person entitled to receive the Shipment at a place which
                Nine Forty Air Cargo Limited may reasonably deem safe and
                convenient, whereupon delivery shall be deemed to have been
                made, and the responsibility of Nine Forty Air Cargo Limited in
                respect of the Shipment shall cease. In any event, Nine Forty
                Air Cargo Limited shall be entitled to the agreed remuneration
                under the contract and Customer shall pay any additional costs
                resulting from the above-mentioned circumstances.
              </li>
              <li>
                3.3 Quotes apply to stackable general cargo only and exclude
                dangerous goods, perishables, valuables, temperature controlled,
                oversized, over-length, out-of-gauge cargo, or any other special
                cargo, unless explicitly mentioned in the offer and accepted by
                Nine Forty Air Cargo Limited.
              </li>
              <li>
                3.4 Quotes are based on lower deck cargo size and transportation
                restrictions only, unless explicitly mentioned in the offer and
                accepted by Nine Forty Air Cargo Limited.
              </li>
              <li>
                3.5 Quotes include air freight charges which are based on actual
                or dimensional weight, whichever is greater. Dimensional weight
                is based on the industry standard volume ratio 1:6, unless
                explicitly agreed between Customer and Nine Forty Air Cargo
                Limited.
              </li>
              <li>
                3.6 Quotes expire on the date indicated on the quotation.
                Without prejudice to clause 4 below or to any other rights Nine
                Forty Air Cargo Limited may have according to law, Nine Forty
                Air Cargo Limited reserves the right to make necessary
                corrections in the event of any change of the Shipment
                information provided.
              </li>
              <li>
                3.7 Quotes include a fuel and a security price, unless the
                parties have expressly agreed otherwise in a separate agreement
                (in which case a fuel and a security charge shall be added to an
                invoice once issued). Any fuel and security prices quoted or
                invoiced can differ from charges invoiced to Nine Forty Air
                Cargo Limited by its carriers, subcontractors or agents for fuel
                and security.
              </li>
              <li>
                3.8 Charges are calculated on chargeable weight and apply to
                Shippers/Consignees/Consignees, as defined by relevant law or
                usage, only. Rates for Shippers/Consignees/Consignees may
                differ.
              </li>
              <li>
                3.9 Unless otherwise agreed, any fee or charge, whether new or
                existing, with regards to the Services and imposed or increased
                at any time by any government agency, carrier, or other third
                party will be passed on in full to Customer, plus duties and
                taxes. This may also include, among others, customs related fees
                billed as a percentage of the CIF value and Ad Valorem charges,
                and any government-imposed warehousing or storage fees.
              </li>
              <li>
                3.10 Nine Forty Air Cargo Limited’s quotations do not include
                special charges, such as but not limited to, insurance premiums,
                inspection charges at origin and destination, duties and taxes,
                postage or courier fees, legalization expenses and heavy lift
                charges. Any such fees will be charged extra, unless explicitly
                mentioned in the offer and accepted by Nine Forty Air Cargo
                Limited.
              </li>
              <li>
                3.11 Any customs clearance fee that is covered in the quotation
                includes three (3) HS codes. Any additional HS code will be
                charged as per valid tariffs.
              </li>
              <li>
                3.12 Pick up or delivery charges are valid for non-bonded trucks
                only.
              </li>
              <li>
                3.13 Any transit time shown in the quotation is indicative only
                and non-binding; it is derived from historical shipment data
                based on, inter alia, the respective trade lane and/or product
                parameter chosen and covering a standard course of
                transportation. The real transit time can differ. No additional
                time period is factored in, e.g. for extraordinary events or due
                to circumstances beyond Nine Forty Air Cargo Limited’s control.
                This includes, without limitation, waiting times for customs
                inspections, or any other act or omission by authorities.
              </li>
              <li>3.14 All cargo is subject to carrier approval.</li>
              <li>
                3.15 Nine Forty Air Cargo Limited shall be under no obligation
                to return any packaging material. If Nine Forty Air Cargo
                Limited does return such material, all relevant local rules and
                regulations do apply and occurring fees and expenses are
                separately charged to Customer.
              </li>
              <li>
                3.16 Shippers/Consignees may be subject to additional security
                procedures and regulations. Where applicable, any charges agreed
                upon are based on Nine Forty Air Cargo Limited own
                Shipper/Consignee status. Additional charges caused by
                Shipper/Consignee status, e.g., for X-ray screenings and/or
                accessorial charges are not included and Customer will be
                charged extra, unless explicitly mentioned in the offer and
                accepted by Nine Forty Air Cargo Limited. Nine Forty Air Cargo
                Limited reserves the right to refuse any Shipment or Services
                due to a Shipper/Consignee status of Customer and accepts no
                liability whatsoever in any such case.
              </li>
            </ol>

            <h5>CUSTOMER’S UNDERTAKING </h5>
            <ul>
              <li>
                4.1. It is a condition of the contract, and Customer warrants
                and undertakes, that:
              </li>
              <li>
                4.1.1 It is either the owner of the Shipment or is authorized by
                the owner to accept these Terms and Conditions on the owner’s
                behalf.
              </li>
              <li>
                4.1.2 The Shipment shall be presented to Nine Forty Air Cargo
                Limited (and/or anyone else dealing with them) securely and
                properly packed in compliance with any applicable statutory
                regulations, recognized standards and best practice and are and
                will remain in a condition to be safely handled, stored and/or
                carried so as not to cause injury, damage, contamination or
                deterioration (or the possibility of them) to any person,
                premises, equipment or to any other items in a way.
              </li>
              <li>
                4.1.3 Before Nine Forty Air Cargo Limited assumes any
                responsibility for or by involvement with the Shipment, Customer
                will inform Nine Forty Air Cargo Limited in writing of any
                relevant matters, including any special precautions necessitated
                by the nature, weight or condition of the Shipment and any
                statutory or other duties specific to the Shipment with which
                Nine Forty Air Cargo Limited or others may need to comply; and
                will promptly after invoicing pay Nine Forty Air Cargo Limited’s
                reasonable extra charge for complying.
              </li>
              <li>
                4.1.4 Except to the extent previously notified in detail to, and
                accepted by, Nine Forty Air Cargo Limited in writing, none of
                the Shipments: are oversized, tires, weapons, live animals,
                chemicals, dangerous, hazardous or contaminated; may cause
                pollution of the environment or harm to human health if they
                escape from their packaging; require temperature controls or
                special security measures, including US, EU and/or National
                military or export controls and/or sanctions; require any
                official consent or license to handle, possess, deal with or
                carry; will at any time whilst in the care or control of Nine
                Forty Air Cargo Limited constitute Waste.
              </li>
              <li>
                4.1.5 None of the Shipments are considered illegal under any
                applicable laws and regulations.
              </li>
              <li>
                4.1.6 It will comply with any reasonable regulations of Nine
                Forty Air Cargo Limited relating to handling, carriage, storage
                or forwarding of Shipments (and ancillary matters) which are
                notified in writing from time to time.
              </li>
              <li>
                4.1.7 Information given by Customer or on its behalf shall be
                correct and complete, including but not limited with regards to
                the Shipment.
              </li>
              <li>
                4.1.8 When providing goods and Services, Customer shall comply
                with all requirements of export, customs and foreign trade
                legislation ("Trade Regulations") and obtain the required export
                authorizations, unless a third party is obliged to apply for the
                export authorizations under applicable Trade Regulations.
                Customer commits to comply with all applicable export control
                and sanction laws as well as the UN, EU (Council Regulations
                latest version) and US anti-terrorism legislation (e.g. Patriot
                Act of 2001, etc.) and agrees to make the inquiries as required
                by this and similar legislation applicable with regard to its
                own business contacts, partners, subcontractors and employees.
                Customer guarantees that all consignees and all shipping
                addresses have been checked against all publicly available
                terrorist lists, blacklists, or similar publications or
                databases (published by EU, UK, US, etc.). Nine Forty Air Cargo
                Limited is not obliged to effect any Shipment, transportation
                and/or deliveries to any (natural or legal) person listed on any
                such list or subject to trade restrictions.
              </li>
              <li>
                4.1.9 Customer must provide Nine Forty Air Cargo Limited, for
                all transactions and in a timely manner with all customs, export
                control, sanctions, information and related documentation
                including but not limited to the customs classification number,
                customs valuation, origin, export control classification number
                including any U.S. export control classification number, any
                export licenses and details of any sanctions or restrictions
                that might be applicable to the parties involved or the
                transaction itself.
              </li>
              <li>
                4.2 Customer shall indemnify and hold Nine Forty Air Cargo
                Limited harmless against any loss or damage it suffers as a
                result of any breach of Customer’s undertakings and will pay all
                costs and expenses (including professional fees) incurred in,
                and Nine Forty Air Cargo Limited’s reasonable charges for,
                dealing with the breach and its consequences. If Nine Forty Air
                Cargo Limited suspect a breach of clause 4.1, it may refuse to
                accept the Shipment, demand its immediate removal, or itself
                arrange its removal without notice, at Customer’s expense.
              </li>
            </ul>

            <h5>LIABILITY </h5>
            <h6>Basis of Liability </h6>
            <ul>
              <li>
                5.1 Nine Forty Air Cargo Limited’s liability is based on its
                general obligation to perform its Services in a professional
                manner and with reasonable skill and care. No Liability for
                Third Parties
              </li>
              <li>
                5.2 Nine Forty Air Cargo Limited is not liable for acts and
                omissions by third parties, such as, but not limited to,
                carriers, warehousemen, stevedores, port authorities and other
                freight forwarders, unless Nine Forty Air Cargo Limited has
                failed to exercise due diligence in selecting, instructing or
                supervising such third parties. Liability as Carrier
              </li>
              <li>
                5.3 Notwithstanding the aforementioned, Nine Forty Air Cargo
                Limited is subject to liability as principal not only when Nine
                Forty Air Cargo Limited performs the carriage itself by its own
                means of transport (performing carrier), but also if, by issuing
                its own transport document or otherwise, Nine Forty Air Cargo
                Limited has made an express or implied undertaking to assume
                carrier liability (contracting carrier).
              </li>
              <li>
                5.4 However, Nine Forty Air Cargo Limited shall not be deemed
                liable as carrier if Customer has received a transport document
                issued by a person other than Nine Forty Air Cargo Limited and
                does not within a reasonable time maintain that Nine Forty Air
                Cargo Limited is nevertheless liable as carrier.
              </li>
              <li>
                5.5 With respect to Services other than carriage of Shipments
                such as, but not limited to, storage, handling, packing or
                distribution of Shipments, as well as ancillary services in
                connection therewith, Nine Forty Air Cargo Limited shall be
                liable as principal (1) when such services have been performed
                by itself using its own facilities or employees, or (2) if it
                has made an express or implied undertaking to assume liability
                as principal.
              </li>
              <li>
                5.6 Nine Forty Air Cargo Limited as principal shall, subject to
                the limitations and exclusion of liability set out in these
                Terms and Conditions, be responsible for the acts and omissions
                of third parties it has engaged for the performance of the
                contract of carriage or other services in the same manner as if
                such acts and omissions were its own and his rights and duties
                shall be subject to the provisions of the law applicable to the
                mode of transport or service concerned, as well as the
                additional conditions expressly agreed or, failing express
                agreement, by the usual conditions for such mode of transport or
                services. Limitation of Liability for Loss and Damage
              </li>
              <li>
                5.7 In no event shall Nine Forty Air Cargo Limited be or become
                liable for any loss of or damage to the Shipment in an amount
                exceeding the equivalent of 2 SDR per kilogram of gross weight
                of the Shipment (or part thereof) lost or damaged, unless a
                larger amount is received from a person for whom Nine Forty Air
                Cargo Limited is responsible. If the Shipment has not been
                delivered within ninety consecutive days after the date when the
                Shipment ought to have been delivered, the claimant may, in the
                absence of evidence to the contrary, treat the Shipment as lost.
                Other Type of Loss
              </li>
              <li>
                5.8 Nine Forty Air Cargo Limited’s liability for any type of
                loss not already mentioned in these Terms and Conditions shall
                not exceed the total amount of 10,000 (in words: ten thousand)
                SDR for each incident and, irrespective of the number of
                incidents and cause of loss, USD 100.000,-- (in words: one
                hundred thousand US Dollars) in aggregate per annum, unless a
                larger amount is received from a person for whom Nine Forty Air
                Cargo Limited is responsible. Exclusions of Liability
              </li>
              <li>
                5.9 Nine Forty Air Cargo Limited shall in no event be liable
                for:
              </li>
              <li>
                5.9.1 valuables or dangerous goods, unless declared to Nine
                Forty Air Cargo Limited in writing at the time of the conclusion
                of the contract, or
              </li>
              <li>
                5.9.2 loss following from delay, unless expressly agreed in
                writing, or 5.9.3 indirect or consequential loss such as, but
                not limited to, loss of profit and loss of market.
              </li>
              <li>
                5.10 The value of the Shipment shall be determined according to
                the current commodity exchange price or, if there is not such
                price, according to the current market price or, if there is no
                commodity exchange price or current market price, by reference
                to the normal value of a Shipment of the same kind and quality.
                Notice and Time Bar
              </li>

              <li>
                5.11 Unless notice of loss of or damage to the Shipment,
                specifying the general nature of such loss or damage, is given
                in writing to Nine Forty Air Cargo Limited by Customer or the
                person entitled to receive the Shipment when the Shipment is
                handed over to Customer or such other person, such handing over
                is prima facie evidence of the delivery of the Shipment in good
                order and condition. Where such loss or damage is not apparent,
                the same prima facie position shall be assumed if notice ‘in
                writing’ is not given within six (6) consecutive days after the
                day when the Shipment was handed over to the person entitled to
                receive it.
              </li>
              <li>
                5.12 With respect to all other loss or damage, any claim by
                Customer against Nine Forty Air Cargo Limited arising in respect
                of any Service shall be made in writing and notified to Nine
                Forty Air Cargo Limited within fourteen (14) days of the date
                upon which Customer became or should have become aware of any
                event or occurrence alleged to give rise to such claim. Any
                claim not made and notified as aforesaid shall be deemed to be
                waived and absolutely barred except where Customer can show that
                it was impossible to comply with this time limit and that
                Customer has made the claim as soon as it was reasonably
                possible for him to do so.
              </li>
              <li>
                5.13 Nine Forty Air Cargo Limited shall be discharged of all
                liability under the contract unless suit is brought within nine
                (9) months after the delivery of the Shipment, or the date when
                the Shipment should have been delivered, or the date when
                failure to deliver the Shipment would give Customer or the
                person entitled to receive the Shipment the right to treat the
                Shipment as lost. With respect to other loss than loss of or
                damage to the Shipment the nine (9) months period shall be
                counted from the point in time when the failure of Nine Forty
                Air Cargo Limited giving right to the claim occurred.
              </li>
            </ul>

            <h5> INSURANCE </h5>
            <ul>
              <li>
                6.1 Unless so otherwise instructed in writing and reimbursed for
                by Customer, Nine Forty Air Cargo Limited does not insure the
                Shipment and Customer shall self-insure or make arrangements to
                cover the Shipment against all insurable risks to their full
                insurable value (including all duties and taxes) with any right
                for the insurer to bring a subrogated claim against Nine Forty
                Air Cargo Limited being excluded. Nine Forty Air Cargo Limited
                shall not be under any obligation to effect a separate insurance
                on each Shipment, but all insurances effected by Nine Forty Air
                Cargo Limited are subject to the usual exceptions and conditions
                of the policies of the insurance company or underwriters taking
                the risk.
              </li>
            </ul>

            <ul>
              <li>
                7.1 Customer agrees to pay the relevant charges, which include
                the price in accordance with the quote chosen by Customer plus
                any additional charges or fees that may arise, inter alia, in
                the form of customs duties and taxes, special equipment charges,
                special pick-ups or delivery and additional storage charges
                after the expiry of the first twenty-four (24) hours or as per
                local free time storage or equipment lease period.
              </li>
              <li>
                7.2 Nine Forty Air Cargo Limited’s charges are subject to VAT.
                The prices offered will be charged in local currency (“Local
                Currency”), unless local practice provides for quotation in USD,
                EUR, or any other currency different from Local Currency
                (“Trading Currency”). Any Trading Currency may be exchanged into
                Local Currency at the day of invoicing by Nine Forty Air Cargo
                Limited. For purposes of determining the Trading Currency
                equivalent of any Local Currency, the exchange rate shall be the
                Nine Forty Air Cargo Clearing Rate at which such Trading
                Currency may be exchanged into the Local Currency plus a
                Fluctuation Fee, or where a NINE FORTY AIR CARGO LIMITED
                Clearing Rate is not available, the locally applicable bankers
                rate of exchange, unless otherwise agreed upon between Nine
                Forty Air Cargo Limited and Customer.
              </li>
              <li>
                7.3 All charges shall be paid free of any deduction, set-off or
                counterclaim of any kind within fourteen (14) days since date of
                invoice, unless otherwise provided for in (1) applicable laws
                and regulations, or (2) a separate written agreement between the
                parties covering one and the same Shipment as the contract
                agreed via the quotation if the parties have agreed that any
                such separate agreement shall prevail. Invoices for tax and duty
                outlays are due immediately and are subject to outlay fees.
              </li>
              <li>
                7.4 Interest shall be paid on money overdue to Nine Forty Air
                Cargo Limited at the maximum rate allowed in the residence
                country of Customer, and if such is not provided for, the
                interest rate applicable by the national bank in the country of
                residence of Customer.
              </li>
              <li>
                7.5 Nine Forty Air Cargo Limited shall, to the extent permitted
                by applicable law, have a general lien on the Shipment and any
                documents relating thereto for any amount due at any time to
                Nine Forty Air Cargo Limited from Customer including storage
                fees and the cost of recovering same, and may enforce such lien
                in any reasonable manner including the sale of the Shipment in
                Customer’s name, subject always to mandatory local law.
              </li>
              <li>
                7.6 In case of a Triangle Transaction, a Triangle Management Fee
                may apply. ALTERATIONS
              </li>
            </ul>

            <ul>
              <li>
                8.1 Nine Forty Air Cargo Limited reserve the right to alter
                these Terms and Conditions, the Service conditions, the Legal
                Notice and any other Nine Forty Air Cargo Limited policies and
                conditions without further notice. A particular contract between
                Customer and Nine Forty Air Cargo Limited will always be subject
                to the versions of the aforementioned policies and conditions in
                force at the time Customer places its offer, unless alterations
                are made pursuant to mandatory requirements imposed by law or
                government authority (in which case the alterations apply from
                the point in time stipulated by law or government authority).
              </li>
            </ul>

            <h5>INCOTERMS®</h5>
            <ul>
              9.1 The Incoterms® were created by the International Chamber of
              Commerce (ICC) in Paris and are a registered trademark of the ICC.
              Incoterms® can be agreed between the seller and the buyer of goods
              as part of their sale of goods contract to define the terms of
              shipment and delivery as well as the transfer of risk between
              those two parties. However, the Incoterms® do not become part of
              the contract between Customer and Nine Forty Air Cargo Limited for
              the provision of the Services, as this contract involves
              forwarding and/or carriage elements, not the sale of goods.
              Customer notifying Nine Forty Air Cargo Limited of the agreed
              Incoterms®-clause merely gives Nine Forty Air Cargo Limited an
              instruction related to the split (if any) of the Service charges
              between seller and buyer. Regardless of the Incoterms®-clause
              Customer is and remains responsible towards Nine Forty Air Cargo
              Limited for all fees and will be held liable in the event any fees
              cannot be collected from third parties in accordance with the
              indicated Incoterms®-clause. CONFIDENTIALITY
            </ul>

            <ul>
              <li>
                10.1 The contents of this contract and any information on Nine
                Forty Air Cargo Limited’s business is sensitive, confidential
                and will not be disclosed by Customer to any third party without
                the express written consent of Nine Forty Air Cargo Limited,
                unless the information is manifestly in the public domain at the
                time of disclosure or such disclosure is required by valid legal
                process or is otherwise required by law or by the rules of any
                listing authority or stock exchange, in which event Customer
                shall give Nine Forty Air Cargo Limited prompt written
                notification thereof. Customer will ensure, and will be liable
                for ensuring, that its directors, employees, agents, advisers
                and subcontractors shall not disclose any confidential
                information.
              </li>

              <li>
                10.2 The obligation of this clause shall survive for a period of
                three (3) years after the termination of the relevant contract.
                SEVERABILITY
              </li>
            </ul>

            <ul>
              <li>
                11.1 If any part of these Terms and Conditions, the Legal Notice
                and any other Nine Forty Air Cargo Limited policies and
                conditions are deemed invalid, void or unenforceable for any
                reason, that part will be deemed severable and will not affect
                the validity and enforceability of the remaining parts.
                MANDATORY LAW
              </li>
            </ul>
            <ul>
              <li>
                12.1 These Terms and Conditions shall only take effect to the
                extent that they are not contrary to the mandatory provisions of
                international conventions (e.g. the Montreal Convention 1999) or
                mandatory national law applicable to freight forwarding
                services. GOVERNING LAW AND JURISDICTION
              </li>
            </ul>
            <ul>
              <li>
                13.1. The relationship between Customer and Nine Forty Air Cargo
                Limited shall be governed by the laws of the country in which
                Nine Forty Air Cargo Limited is incorporated, without giving
                effect to its conflict of law provisions, and the courts at the
                location of Nine Forty Air Cargo Limited’s registered office
                shall have exclusive jurisdiction.
              </li>
            </ul>

            <p>
              For the avoidance of doubt, the application of the United Nations
              Convention on International Sale of Goods (CISG) is excluded.
            </p>

            <h5>DEFINITIONS </h5>
            <p>
              Affiliate(s) means (1) any corporation or business entity fifty
              percent (50%) or more of the voting stock or voting equity
              interests of which are owned directly or indirectly by a party; or
              (2) any corporation or business entity which directly or
              indirectly owns fifty percent (50%) or more of the voting stock or
              voting equity interests of a party; or (3) any corporation or
              business entity directly or indirectly controlling or under
              control of a corporation or business entity as described in (1) or
              (2).
            </p>

            <p>
              Customer means any registered company choosing to request a
              quotation from Nine Forty Air Cargo Limited. Further, Customer
              includes any person having rights or obligations under a contract
              of carriage concluded with Nine Forty Air Cargo Limited for whom
              the Terms and Conditions apply. For the avoidance of doubt the
              Services are not tailored for individuals / consumers and the same
              are not accepted as Customers.
            </p>
            <p>
              Fluctuation Fee means a set percentage added on top of the
              exchanged amount to accommodate for any currency fluctuations
              during the month as the NINE FORTY AIR CARGO LIMITED Clearing Rate
              is set once per month applicable for a whole month.
            </p>
            <p>
              HS Code means Harmonized Commodity Description and Coding System.
              NINE FORTY AIR CARGO LIMITED Clearing Rate NINE FORTY AIR CARGO
              LIMITED Index means the exchange rate that is applied for the
              duration of one month and is based on the published business rates
              available on www.oanda.com; the rate per currency is retrieved
              once a month for the following month on the second last working
              day of the month, using the published rate from two days prior.
              means an index that is determined by Nine Forty Air Cargo Limited
              and calculated on the basis of a weighted average of the fuel and
              security rates of the top five (5) airlines used by Nine Forty Air
              Cargo Limited during a set period of time within the respective
              region.
            </p>
            <p>
              Nine Forty Air Cargo Limited own Shipper/Consignee means a
              consignor who originates cargo or mail for its own account and
              whose procedures meet common security rules and standards
              sufficient to allow the carriage of cargo or mail on any aircraft.
              Nine Forty Air Cargo Limited means the particular operating entity
              within the Nine Forty Air Cargo Limited Group that is performing
              the Services, and, with regards to clause 5 only, also includes
              all other members of the Nine Forty Air Cargo Limited Group. Nine
              Forty Air Cargo Limited Group means the group of companies
              comprising the direct and indirect Affiliates of the ultimate
              parent company Nine Forty Air Cargo Limited.
            </p>
            <p>
              Local Currency has the meaning given to such term in clause 7.2.
              Montreal Convention means the Convention for the Unification of
              Certain Rules for International Carriage by Air 1999.
            </p>
            <p>
              SDR means a Special Drawing Right as defined by the International
              Monetary Fund.
            </p>
            <p>
              Services means the services agreed on between Customer and Nine
              Forty Air Cargo Limited, which may include forwarding, carriage,
              consolidation, storage of the Shipment in transit, handling, as
              well as ancillary services, such as but not limited to pick-up,
              delivery, customs clearances (export/import) and issuance of
              documentation.
            </p>
            <p>
              Shipment means the goods Nine Forty Air Cargo Limited or its
              subcontractor physically takes over for the provision of the
              Services. Trading Currency has the meaning given to such term in
              clause 7.2.
            </p>
            <p>
              Triangle Management Fee means a fee applicable for managing
              services due to Triangle Transaction. This fee will be charged as
              per clause PAYMENT AND LIEN.
            </p>
            <p>
              Triangle Transaction means a transaction where the invoiced
              Customer is located in a different country than the operating
              entity (ies) within the Nine Forty Air Cargo Limited Group that is
              (are) performing the Services.
            </p>
            <p>
              TSA means Transportation Security Agency, a division of the United
              States Homeland Security.
            </p>
            <p>
              Un Nine Forty Air Cargo Limited own Shipper/Consignee means a
              Shipper who has not been properly vetted or registered with the
              TSA or other competent authorities. There are material
              restrictions to shipping methods for Un Nine Forty Air Cargo
              Limited own Shippers/Consignees.
            </p>

            <p>
              Waste bears its general meaning and also means “Waste” as defined
              legislatively.
            </p>
          </div>
        </div>

        <input type="radio" name="trg1" id="acc3" />
        <label for="acc3">Past Perfomances</label>
        <div className="content">
          <div className="inner">
            Our company has quite a portfolio to boot . We ensure every detail
            is taken care of to ensure the task is not only accomplished but the
            accomplishment leaves all parties involved happy and satisfied
          </div>
          <div className="past-perfomance-images">
            <img className="about-partners-achievement" src={achievement} alt="our partners"/>
            <br/>
            <img className="about-partners-achievement" src={client} alt="our partners"/>
            <br/>
            <img className="about-partners-achievement" src={map} alt="our partners"/><br/><br/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cresourse;
