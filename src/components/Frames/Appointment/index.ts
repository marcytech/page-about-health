import { html, css } from "iares";
import { UContainer, UTitle } from "@/components/Units";
import { mediaQueries } from "@/services/mediaQueries";
import { FEnumerableTitle } from "@/components/Frames";
import { FamImage } from "fam-code-ui";

const media = mediaQueries();

const template = () => html`
  <${UContainer}>
    <slot target="content" ctx="f-appointment">
      <div class="grid grid-cols-12">
        <div class="
          xxl-col-6
          xl-col-6
          lg-col-6
          sm-col-12 
          xs-col-12
        ">
        <div class="title-ctx">
          <${UTitle}
            title="Let us help you solving your perdonal essues."
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,consectetur you solving your perdonal essues.adipisicing elit quos!"
          />
        </div>
        <div class="text-ctx">
          <${FEnumerableTitle}
            title="Easy Appointment Booking"
            text="Lorem, ipsum dolor sit amet consectetur quos!"
            number="1"
          />

          <${FEnumerableTitle}
            title="Professional Consultation"
            text="Lorem, ipsum dolor sit amet consectetur quos!"
            number="2"
          />

          <${FEnumerableTitle}
            title="Affordable Service"
            text="Lorem, ipsum dolor sit amet consectetur quos!"
            number="3"
          />        
        </div>
        </div>       
        <div class="
          xxl-col-6
          xl-col-6
          lg-col-6
          sm-col-12
          sm-row-start-1
          xs-col-12
          xs-row-start-1
          xy-align-center 
        ">
          <div class="image-ctx">
            <${FamImage} 
              src="/assets/images/person.png" 
              fallbackSrc="/assets/images/404.png"
              alt="relógio branco" 
            />          
          </div>        
        </div>      
      </div>
    </slot>
  </>
`;

export const FAppointment = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  f-appointment{
    display: flex;
    width:100%;
    flex-wrap: wrap; 
    justify-content: center;
    align-items: center;
    background: #fff;
    padding:5em 0;
  }

  .image-ctx img {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center; 
  }
  .text-ctx {
    padding: 0 2em
  }

`;
