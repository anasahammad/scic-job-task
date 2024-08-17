import Container from "../components/Container";


const Contact = () => {
    return (
        <div className="p-8">
            <Container>
            <section className="p-6 bg-slate-200">
	<form  className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow ">
		<h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
		<div>
			<label htmlFor="name" className="block mb-1 ml-1">Name</label>
			<input id="name" type="text" placeholder="Your name"  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25  " />
		</div>
		<div>
			<label htmlFor="email" className="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="Your email"  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 "  data-temp-mail-org="2" />
		</div>
		<div>
			<label htmlFor="message" className="block mb-1 ml-1">Message</label>
			<textarea id="message"  placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 "></textarea>
		</div>
		<div>
			<button type="submit" className="w-full btn btn-primary  ">Send</button>
		</div>
	</form>
</section>
            </Container>
        </div>
    );
};

export default Contact;