import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import best1 from '../images/bestseller/img1.avif';
import img2 from '../images/bestseller/img2.avif';
import img3 from '../images/bestseller/img3.avif';
import img4 from '../images/bestseller/img4.avif';


const bestSellers = [
    { id: 1, name: 'Clenser', price: 38, likes: 24, image: best1 },
    { id: 2, name: 'Foundation', price: 56, likes: 18, image: img2 },
    { id: 3, name: 'Concealer', price: 48, likes: 25, image: img3 },
    { id: 4, name: 'Lip Gloss', price: 24, likes: 28, image: img4 },
];

export default function BestSellers() {
    return (
        <section className="bestsellers-section">
            <Container>
                <h2 className="section-title">Best Sellers</h2>

                <Row className="g-4">
                    {bestSellers.map((item) => (
                        <Col xs={6} md={3} key={item.id}>
                            <div className="product-card">
                                <div className="product-img-wrap">
                                    {item.image && (
                                        <img src={item.image} alt={item.name} />
                                    )}
                                    <button className="wishlist-btn top-right" aria-label="Add to wishlist">
                                        <BsHeart />
                                    </button>
                                </div>

                                <div className="product-info">
                                    <h3 className="product-name">{item.name}</h3>
                                    <span className="product-price">${item.price}</span>
                                </div>

                                <p className="product-likes">
                                    <BsHeartFill /> {item.likes}
                                </p>

                                <Button className="bag-btn">Add to Bag</Button>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}