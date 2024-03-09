import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutSchool() {
  return (
    <div className="about-school text-center bg-light p-5" id="about">
      <h2 className="text-danger about-head">About School</h2>
      <p className="about-para">RD Public School established in 2009, is Situated at Vikram Vihar, Near S.N. Sinha College, Tekari. This School has Its own charming building with 25 class rooms . (20×25 feet) fully equipped laboratories. Playground and a rich library admits its natural beauty. What distinguishes a great school from a good school? I believe that clarity of purpose, exceptional teachers, and demonstrated outcomes are hallmarks of great schools. A great school is a place with a deep commitment to student learning, where faculty nourish the intellectual, moral, emotional, and social growth of every student. It is a place where students, teachers, and parents embark together on an academic journey with clear and well-defined objectives. It is filled with the joy of discovery and the excitement of personal challenge and growth. It is a community dedicated to developing strength of character and excellence in all dimensions of its students’ lives. And it is a place that has a distinctive and lasting impact.</p>
       
      <Container>
      <h1 className='text-primary m-5'>INFRASTRUCTURE</h1>
        <Row className="justify-content-center">
          <Col sm={12} md={6} lg={3} className="mb-3">
           
            <Card>
              <Card.Img variant="top" style={{width:'auto',height:"250px"}} src="https://rdpublicschools.com/wp-content/uploads/2019/05/computer_lab_0002.jpg" />
              <Card.Body>
                <Card.Title>COMPUTER LAB</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3} className="mb-3">
            <Card>
              <Card.Img variant="top"style={{width:'auto',height:"250px"}} src="https://rdpublicschools.com/wp-content/uploads/2019/05/photo-robotics-006.jpg" />
              <Card.Body>
                <Card.Title>ROBOTICS</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3} className="mb-3">
            <Card>
              <Card.Img variant="top" style={{width:'auto',height:"250px"}} src="https://rdpublicschools.com/wp-content/uploads/2019/05/our_campus_03.jpg" />
              <Card.Body>
                <Card.Title>LIBRARY</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3} className="mb-3">
            <Card>
              <Card.Img variant="top" style={{width:'auto',height:"250px"}} src="https://rdpublicschools.com/wp-content/uploads/2019/05/our_campus_07.jpg" />
              <Card.Body>
                <Card.Title>DIGITAL CLASSROOMS</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSchool;

