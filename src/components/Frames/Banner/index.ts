import { html, css } from "iares";
import { UTitle } from "@/components/Units/Title";
import { FamButton } from "fam-code-ui";
import { UContainer } from "@/components/Units";


const template = () => html`
  <${UContainer}>
    <slot target="content" ctx="f-banner">
      <div class="title-ctx">
        <h2>SOVE MENTAL ISSUES</h2>
        <${UTitle}
          title="Take care of your mental health"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ea.
          lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ea."
        />
        <div class="button-ctx">
          <${FamButton}>
            <slot target="content">
              <span type="primary">
                <i>Book an appointment</i>
              </span>
            </slot>
          </>           
        </div>          
      </div>
    </slot>
  </>
`;

export const FBanner = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  f-banner {
    display: flex;
    width:100%;
    flex-wrap: wrap; 
    justify-content: flex-start;
    align-items: center;
  }
  f-banner {
    margin-top: calc(100vh - (100vh - 93.3px));
    height:calc(100vh - 93.3px);
    background:url("/assets/images/pessoa.jpg") center top / cover no-repeat;
  }
  .title-ctx {
    display:flex;
    flex-wrap: wrap;
    width:100%;
    max-width:470px
  }

  h2 {
    display: flex;
    width:100%;
    text-align: left;
    color:#ff794c;
    padding:1em 0;
  }

   .button-ctx {
    display: flex;
    width:230px;
    position: relative;
    top:-50px;
    left:0px;
  }

`;
