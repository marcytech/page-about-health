import { html, css } from "iares";
import { UContainer, ULogo } from '@/components/Units';
import { UContact } from "@/components/Units/Contact";
import { FMenu } from "../Menu";


const template = () => html`
  <${UContainer}>
    <slot target="content" ctx="f-header">
      <div class="wrap-ctx">
        <div class="logo-ctx">
          <${ULogo}/>
        </div>    
        <div class="contact-ctx">
          <${UContact}/>        
        </div> 
        <div class="menu-ctx">
          <${FMenu}/>         
        </div>
      </div>
    </slot>    
  </>   
`;

export const FHeader = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  f-header,
  .wrap-ctx {
    display: flex;
    width:100%;
    justify-content: center;
    align-items: center;
    background:#fff;
  }
  f-header {
    position: absolute;
    top:0;
    left:0;
  }

  .wrap-ctx {
    justify-content:space-between;
    position: relative;
  }
  .menu-ctx {
    display:flex;
    width:100%;
    position: absolute;
    top:93px;
    left:0;
    padding: 0 auto;
  }
`;
