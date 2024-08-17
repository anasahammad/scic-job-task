import Container from "../components/Container";


const About = () => {
    return (
        <div className="p-8">
            <Container>
            <div className="p-8 bg-gray-100">
      <Container>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-700">
            Welcome to Exclusive, your number one source for all things fashion. We're dedicated to providing you the very best of clothing and accessories, with an emphasis on quality, style, and customer satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col items-center">
            <img
              src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15872.jpg?ga=GA1.1.637476958.1713794259&semt=ais_hybrid"
              alt="Our Team"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2022, Exclusive began as a small startup with a passion for bringing the latest trends to our customers. Our team of fashion enthusiasts and industry experts work tirelessly to curate a collection that reflects the latest in style and quality.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://img.freepik.com/premium-photo/our-mission-message-written-wooden-blocks-with-brown-background-conceptual-our-mission-symbol-copy-space_648871-6650.jpg?ga=GA1.1.637476958.1713794259&semt=ais_hybrid"
              alt="Our Mission"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-600">
              At Exclusive, our mission is to empower individuals to express their unique style through high-quality, fashionable products. We strive to exceed expectations by providing exceptional service and a seamless shopping experience.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-4">
            Have any questions or feedback? We'd love to hear from you! Reach out to us at{' '}
            <a href="mailto:support@exclusive.com" className="text-blue-500 hover:underline">
              support@exclusive.com
            </a>
            .
          </p>
        </div>
      </Container>
    </div>
            </Container>
        </div>
    );
};

export default About;