import { testimonials } from "../constants/index.jsx";
import TestimonialItem from "../components/TestimonialItem.jsx";

const Testimonials = () => {
  const halfLength = Math.floor(testimonials.length / 2);

  return (
    <section className="relative z-1 py-10 md:py-28 lg:py-5">
        

      <div className="container lg:flex-col  ">
      <div className="testimonials_head-res flex justify-center items-center lg:mb-9 p-9 ">
            <div className="lg:flex lg:flex-col lg:items-center">
            <p className="caption mb-5 max-md:mb-2  ">Wall of Love</p>
            <h3 className="  h3 max-md:h3 text-p4 ">Words from our fans</h3>
            </div>
        </div>
        
        <div className="testimonials_inner-after testimonials_inner-before relative  lg:mt-20 -mr-3 flex items-start max-lg:static max-md:block ">
          <div className="testimonials_group-after flex-20">
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>

          <div className="flex-50">
            {testimonials.slice(halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;