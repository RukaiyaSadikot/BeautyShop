import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsHeart } from 'react-icons/bs';
import img1 from '../images/category/img1.avif'; // adjust path to wherever your image lives
import img2 from '../images/category/img2.avif';
import img3 from '../images/category/img3.avif';



const categories = [
    { id: 1, name: 'Haicare', price: 28, image: img1 },
    { id: 2, name: 'Shampoo', price: 45, image: img2 },
    { id: 3, name: 'Hair Oil', price: 25, image: img3 },
    { id: 4, name: 'Haircare', price: 28, image: img1 },
];

export default function CategoryGrid() {
    return (
        <section className="category-section">
            <Container>
                <h2 className="section-title">Shop by category</h2>

                <Row className="g-4">
                    {categories.map((item) => (
                        <Col xs={6} md={3} key={item.id}>
                            <div className="category-card">
                                <div className="category-img-wrap">
                                    {item.image && (
                                        <img src={item.image} alt={item.name} />
                                    )}
                                    <button className="wishlist-btn" aria-label="Add to wishlist">
                                        <BsHeart />
                                    </button>
                                </div>
                                <h3 className="category-name">{item.name}</h3>
                                <p className="category-price">${item.price}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}