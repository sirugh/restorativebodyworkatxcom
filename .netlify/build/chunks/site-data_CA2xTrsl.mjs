const businessInfo = {
	phone: "(512) 920-3103",
	email: "info@restorativebodyworkatx.com",
	address: "2111 Dickson Dr #14",
	city: "Austin",
	state: "TX",
	zip: "78704",
	bookingUrl: "https://www.massagebook.com/therapists/restorativebodyworkatx",
	mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.699230326372!2d-97.78387882394603!3d30.245652409008724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab64db1f9f463763%3A0xc669fa7e156b773a!2sRestorative%20Bodywork!5e0!3m2!1sen!2sus!4v1715558773560!5m2!1sen!2sus"
};
const hours = {
	sunday: "10:00 AM - 5:00 PM",
	monday: "10:00 AM - 7:00 PM",
	tuesday: "Closed",
	wednesday: "Closed",
	thursday: "Closed",
	friday: "Closed",
	saturday: "10:00 AM - 5:00 PM",
	note: "By appointment only"
};
const pricing = [
	{
		duration: "60 minutes",
		price: 120
	},
	{
		duration: "75 minutes",
		price: 150
	},
	{
		duration: "90 minutes",
		price: 180
	}
];
const faqs = [
	{
		title: "Before Your Appointment",
		description: "For your first appointment, please arrive 15 minutes prior to your scheduled appointment time to allow time to complete the Client Intake Form. For all other appointments, please arrive 5 to 10 minutes before your scheduled appointment time to allow time to discuss our session."
	},
	{
		title: "Payment",
		description: "Credit cards or cash only. We do not accept personal checks."
	},
	{
		title: "Insurance",
		description: "We do not accept insurance as a form of payment, but most Flex Cards include massages. We can provide receipts upon request."
	},
	{
		title: "Cancellation & No-Show Policy",
		description: "We require at least 24 hours notice to cancel an appointment. Clients who cancel an appointment with less than 24 hours notice will be billed 50% of the price of the scheduled service. Clients who do not show up for a scheduled appointment or notify us in advance will be billed for the full price of the scheduled service. We understand that emergencies and illnesses can arise, therefore last-minute cancellations due to things such as verifiable emergencies, illnesses or inclement weather will generally not result in any missed session charges, however this is to be determined at the practitioner's discretion."
	},
	{
		title: "Late Arrival Policy",
		description: "All scheduled appointments will end at the scheduled ending time for us to stay on schedule. Clients who arrive late to their scheduled appointment will be charged for the full session and will not receive a time extension."
	},
	{
		title: "Massage Termination",
		description: "Only professional massage and bodywork services for relaxation or therapeutic purposes are offered at Restorative Bodywork. Massage services will be terminated immediately in the event of inappropriate conduct of any kind. This includes harassment, threatening speech or behavior, sexual advances or requests, or disrespectful actions or language. A session will not be conducted if the client is under the influence of drugs or alcohol. If the massage is terminated for any of these reasons, full payment for the scheduled session is still required."
	},
	{
		title: "Draping Policy",
		description: "Clients will be appropriately draped with a sheet and/or towel at all times during their massage. Only areas of the body that are currently being treated will be exposed. The breast and genital areas will always remain draped and are never massaged."
	},
	{
		title: "In-Home Massage",
		description: "We offer In-Home massage on a limited basis. For rates and other info, please email us at <a href='mailto:info@restorativebodyworkatx.com'>info@restorativebodyworkatx.com</a>"
	}
];
const siteData = {
	businessInfo: businessInfo,
	hours: hours,
	pricing: pricing,
	faqs: faqs
};

export { siteData as s };
