import { html, css } from "iares";
import { UContainer } from '@/components/Units';
import { FFormSchedule } from "@/components/Frames";
import { FamButton, FamIcon } from "fam-code-ui";


const template = () => html`
  <${UContainer}>
    <slot target="content" ctx="f-form-section">
      <div class="wrap-ctx">
        <div class="form-ctx">
          <div class="incon-ctx">
            <${FamIcon}
              name="comment"
              size="2"
            />          
          </div>
          <${FFormSchedule}/>
          <div class="button-ctx">
            <${FamButton}>
              <slot target="content">
                <span type="primary">
                  <i>Request for booking</i>
                </span>
              </slot>
            </>           
          </div>         
        </div>
      </div>
    </slot>
  </>
`;

export const FFormSection = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  f-form-section,
  .wrap-ctx {
    display: flex;
    width:100%;
    height:100vh;
    align-items: center;
  }

  f-form-section {
    justify-content: center;
    background:url("/assets/images/pessoa03.jpg") center top / cover no-repeat;
  }

  .wrap-ctx {
    width:100%;
    justify-content:right;
  }
  .form-ctx {
    display:flex;
    flex-wrap: wrap;
    width:100%;
    max-width:450px;
    justify-content: center;
    align-items: center;
    border-radius:8px;
    background:#ff794c; 
    padding:1em 3em;

  }
  .incon-ctx {
    display: flex;
    width:100px;
    height:100px;
    border-radius:50px;
    justify-content: center;
    align-items: center;
    background:#ff9470;
    color: #fff;
  }

  .button-ctx {
    display: flex;
    width: 100%;
    color:#000;
    padding:2em 0;
  }
  .button-ctx span {
    border-radius:8px;
    border:0;
    background: #fff;

  }

`;
