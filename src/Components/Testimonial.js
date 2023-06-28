import React from 'react';
import Liz from '../Assets/liz.png'
import Betty from '../Assets/betty.png'
import Esme from '../Assets/esme.png'
import Eric from '../Assets/eric.png'
import Lore from '../Assets/lore-tatoe.png'
import Alma from '../Assets/alma.png'

const testimonials = [
  {
    imageSrc: Liz,
    imageAlt: 'Testimonial 1',
    description: 'Happy Birthday to my: Nail tech, Makeup artist, Stylist, Body guard, Roomate, Travel buddy, Financial advisor Etc. But most importantly my best friend ',
  },
  {
    imageSrc: Betty,
    imageAlt: 'Testimonial 2',
    description: '“My friend! Your my favorite person to adventure with and my sister for life! I love you and I got your back forever!!!!.',
  },
  {
    imageSrc: Esme,
    imageAlt: 'Testimonial 3',
    description: 'Happy Bday Jas💗👯‍♀️! Thank you for being such a great friend to me and bri. We love you so much! We support you always!! We wish you tons of happiness today, tomorrow, and forever✨',
  },
  {
    imageSrc: Eric,
    imageAlt: 'Testimonial 4',
    description: '“JASMINE. Happy birthday my dear friend. Miss you a ton. Thanks for all the fun memories and for believing in me. Hope to see you soon. Turn up!! "',
  },
  {
    imageSrc: Lore,
    imageAlt: 'Lore',
    description: 'Happy birthday Jaslo! You’re such a cool and fun friend to be around! here’s to many more birthday’s and celebrations! Wishing you lots of love and happiness always!'
  },
  {
    imageSrc: Alma,
    imageAlt: 'Alma',
    description: 'Happy Birthday Jas! 🎉🎂 On this special day, I wanted to take a moment to celebrate you and the incredible person you are! May this birthday be filled with beautiful moments. I wish you happiness, success, and an abundance of love in the year ahead. Stay ICONIC! I hope you like this website (:'

  },
];

const Testimonial = () => {
  return (
    <div>
      {testimonials.map((testimonial, index) => (
        <div className="testimonial" key={index}>
          <div className="testimonial-image-container">
            <img src={testimonial.imageSrc} alt={testimonial.imageAlt} className="testimonial-image" />
          </div>
          <div className="testimonial-content">
            <p className="testimonial-description">{testimonial.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
