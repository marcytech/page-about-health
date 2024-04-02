import { html, css } from "iares";
import { FamButton, FamImage } from "fam-code-ui";
import { UContainer } from "@/components/Units";
import { UTitle } from "@/components/Units/Title";
import { mediaQueries } from "@/services/mediaQueries";

const media = mediaQueries();

const template = () => html`
  <${UContainer}>
    <slot target="content" ctx="f-snippets">
      <div class="grid grid-cols-12">
        <div class="
          xxl-col-5
          xl-col-6
          lg-col-6
          sm-col-12
          xs-col-12
          xy-align-center 
        ">
        <div class="image-ctx">
          <${FamImage} 
            src="/assets/images/image2.png" 
            fallbackSrc="/assets/images/404.png"
            alt="relógio branco" 
          /> 
        </div>       
        </div>
        <div class="
          xxl-col-start-7 xxl-col-end-12
          xl-col-6
          lg-col-6
          sm-col-12
          xs-col-12
        ">
        <div class="title-ctx">
          <${UTitle}
            title="Happiness cannot be porsed; it must ensue."
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ea.
            lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ea."
          /> 
          </div>
        <div class="
          xxl-col-start-8 xxl-col-end-10
          xl-col-6
          lg-col-6
          sm-col-12
          xs-col-12
        ">
          <div class="button-ctx">
            <${FamButton}>
              <slot target="content">
                <span type="tertiary-hole">
                  <i>Book an appointment</i>
                </span>
              </slot>
            </>            
          </div>         
        </div>        
        </div>
      </div>
    </slot>
  </>
`;

export const FSnippets = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  f-snippets {
    display: flex;
    width:100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #f9f9f9;
    padding:5em 0;
  }

  .title-ctx,
  .text-ctx {
    display: flex;
    width:100%;
    justify-content: center;
    align-items: center;
    text-align: left;
  }
  
  .image-ctx {
    display: flex;
    width:100%;
    justify-content: center;
    align-items:center;
  }
  .button-ctx {
    display: flex;
    width:230px;
    position: relative;
    top:-50px;
    left:0px;
  }

  ${media.xs(css`
    .button-ctx {
      position: relative;
      top:-38px;
      left:0;
    }    
  `)}
`;
