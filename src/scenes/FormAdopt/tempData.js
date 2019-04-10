const content = `
## NOT A NON-DISCLOSURE AGREEMENT (Demonstration 1.0)

**This is for demonstration purposes only. No legally binding agreement is intended to be made.**

**I am (not) making this agreement with any other person or organization**

* **who has signified their acceptance of these terms**, and
* with whom I have **electronically confirmed a call or meeting.**

**Each party (does not) agree**

to treat Confidential Information as follows:

* **Use it only for the purpose** of participating in mutual discussions or activities with the disclosing party.
* **Protect it from disclosure**, using at least the same level of care as they do for their own Confidential Information, but no less than reasonable care.
* **Limit access** to persons with a legitimate need, who are bound by a confidentiality agreement no less protective than this agreement, and who receive notice of their obligations.
* **Provide immediate notice** in the event they are to be compelled by law to disclose Confidential Information, and cooperate with any effort to prevent or limit disclosure.
* **Return, destroy or delete** all electronic and physical copies of Confidential Information on request of the disclosing party (including where embodied in notes, summaries or other work product), subject to retention only when required by law or when archived through scheduled backups; and promptly certify compliance as to all persons who had access.

**Information is Confidential if**

* It is written or digital and **marked or titled as confidential**, or
* It is **delivered orally, and promptly later identified** in writing as confidential.

**But, information is not Confidential if**

* It is or comes into the **public domain** (other than through violation of this agreement), or
* The recipient can show that they **independently developed** the information or obtained it from someone legally entitled to provide it.

**This agreement will (not) last**

for **three years** from the date on which Confidential Information was received. This agreement **applies to previously disclosed** Confidential Information. Expiration of these obligations will not affect any other rights of a party under copyright, patent or other intellectual property laws.

**This (non) agreement has details**

Any controversy or claim arising out of or relating to this contract, or the breach thereof, shall be settled by **arbitration** administered by the American Arbitration Association under its Commercial Arbitration Rules, and judgment on the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof.

This agreement **does not convey any right**, title or interest in Confidential Information or any other license to use, sell, exploit, copy or further develop any Confidential Information. **No license** is granted or implied under any patent, any application for any patent, and/or any other proprietary information, in which a disclosing party has any right, title or interest. The waiver of any right or remedy for a breach of this Agreement will not be construed to be a waiver of any future breach.

**Notices** under this Agreement may be made by **email** to the address used to sign this agreement (or another email address they may later designate); provided any email notices is followed promptly by a written copy via certified mail to the party's address above.

If any part of this Agreement is deemed invalid or unenforceable to any extent or in any jurisdiction, the rest of this Agreement will **remain effective to the fullest extent possible**. This Agreement may not be altered or amended except in writing by both parties. No party may assign this Agreement without the other's written consent, except to a successor-in-interest that agrees in writing to assume all of the assigning party's obligations under this Agreement.

This Agreement creates **no obligation on either party to continue discussions or enter into any relationship**. This Agreement does not limit any previous contractual obligations as to Confidential Information.
`

export default [
	{
		content: `content 1.1 ${content}`,
		type: 'general-purpose',
		name: 'General Use -- Marking Required',
		author: 'Cooley Law Firm',
		date: '15 Apr 2019',
		version: '1.1',
		id: 183,
		blurb:
			'For general commercial situations. Not recommended for employment situations'
	},
	{
		content: `content 1.0 ${content}`,
		type: 'general-purpose',
		name: 'General Use -- Marking Required',
		author: 'Cooley Law Firm',
		date: '15 Apr 2019',
		version: '1.0',
		id: 182,
		blurb:
			'For general commercial situations. Not recommended for employment situations'
	},
	{
		content: `content 0.9 ${content}`,
		type: 'general-purpose',
		name: 'General Use -- Marking Required',
		author: 'Cooley Law Firm',
		date: '15 Apr 2019',
		version: '0.9',
		id: 181,
		blurb:
			'For general commercial situations. Not recommended for employment situations'
	},
	{
		content: `demo 1.0 ${content}`,
		type: 'demo',
		name: 'Demo NDA',
		author: 'Trustbot Software Inc.',
		date: '15 Apr 2019',
		version: '1.0',
		id: 180,
		blurb: 'Demo Text'
	},
	{
		content: `demo 0.9 ${content}`,
		type: 'demo',
		name: 'Demo NDA',
		author: 'Trustbot Software Inc.',
		date: '15 Apr 2019',
		version: '0.9',
		id: 178,
		blurb: 'Demo Text'
	},
	{
		content: `landlord-tenant 0.9 ${content}`,
		type: 'landlord-tenant',
		name: 'Landlord - Tenant NDA',
		author: 'Dewey Cheatem & Howe',
		date: '15 Apr 2019',
		version: '1.0',
		id: 180,
		blurb:
			"Non-Disclosure Agreement customized to cover tenant's disclosure of financial information."
	},
	{
		content: `household 1.0 ${content}`,
		type: 'household',
		name: 'Household NDA',
		author: 'Hollywood Law Firm',
		date: '15 Apr 2019',
		version: '1.0',
		id: 180,
		blurb:
			'Non-Disclosure Agreement customized for household workers employed by public figures.'
	},
	{
		content: `Game Tester NDA 1.0 ${content}`,
		type: 'game-tester',
		name: 'Game Tester NDA',
		author: 'International Game Developers Association',
		date: '15 Apr 2019',
		version: '1.0',
		id: 180,
		blurb:
			'Non-Disclosure Agreement customized for individuals provided with pre-release access to gaming software or applications.'
	}
]
