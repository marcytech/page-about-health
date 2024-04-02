import { FamIcon } from "fam-code-ui";
import { html, css } from "iares";
import { mediaQueries } from "@/services/mediaQueries";

const media = mediaQueries();

const template = () => html`
  <div class="wrap-ctx">
    <div class="phone-ctx">
       <${FamIcon}
        name="phone_iphone"
        size="1.4"
        class="icon"
      />
      <span>41 98465-5635</span>
    </div>  
    <div class="email-ctx">
       <${FamIcon}
        name="alternate_email"
        size="1.4"
        class="icon"
      />
      <span>email@email.com</span>    
    </div>  
  </div>
`;

export const UContact = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  u-contact,
  .wrap-ctx,
  .phone-ctx,
  .email-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
    padding:0 1em;
    font-weight: bold;
  }
  .phone-ctx,.email-ctx {
    color:#20293d;
  }
  .phone-ctx .icon,
  .email-ctx .icon {
    color: #2d947a;
    margin-right:5px;
  }
  .phone-ctx {
    border-right: 1px solid #d5d6d9
  }

  ${media.sm(css`
    span {
      display:none;
    }
  `)}
  ${media.xs(css`
    span {
      display:none;
    }
  `)}
`;
