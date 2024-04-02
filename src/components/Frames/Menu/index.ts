import { html, css } from "iares";
import { mediaQueries } from "@/services/mediaQueries";
import { FamButton, FamIcon } from "fam-code-ui";

const media = mediaQueries();

const template = () => html`
  <div class="wrap-ctx">
    <ul class="list-ctx">
      <li class="list-menu-ctx">
        <a href="#">Home</a>
      </li>
      <li class="list-menu-ctx">
        <a href="#">Services</a>
      </li>
      <li class="list-menu-ctx">
        <a href="#">About us</a>
      </li>
      <li class="list-menu-ctx">
        <a href="#">News</a>      
      </li>
    </ul>
    <div class="icon-ctx">
      <${FamIcon}
        name="menu"
        size="2"
      />    
    </div>
    <div class="button-ctx">
      <${FamButton}>
        <slot target="content" ctx="f-menu">
          <span type="primary" class="text-ctx">
            Book an appointment
          </span>
        </slot>
      </>       
    </div>
  </div>
`;

export const FMenu = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  f-menu,
  .wrap-ctx,
  .list-ctx {
    display: flex;
    width:100%;
    justify-content: flex-start;
    align-items: center;
    background:#1d263a;
    color:#fff;
  }
  .wrap-ctx {}
  .list-ctx {
    padding:1em;
  }
  .list-menu-ctx {
    padding:0 1em;
  }
  .icon-ctx {
    display: flex;
    width:100%;
  }
  .button-ctx {
    width:250px;
    display: flex;
  }
  
  .text-ctx {
    text-transform:none;
  }

   ${media.xxl(css`
    .list-ctx {
      display:flex;
    }
    
    .icon-ctx {
      display: none
    }
  `)}

   ${media.xl(css`
    .list-ctx {
      display:flex;
    }

    .icon-ctx {
      display: none
    }
  `)}

   ${media.lg(css`
    .wrap-ctx {
      position: absolute;
      top:-11px;
    }

    .list-ctx {
      display:flex;
    }

    .icon-ctx {
      display: none
    }
  `)}

   ${media.sm(css`
    .wrap-ctx {
      position: absolute;
      top:-11px;
    }

    .list-ctx {
      display:none;
    }

    .button-ctx {
      width:3089px;
    }

    .icon-ctx {
      justify-content: center;
      align-items: center;      
    }   
  `)}

   ${media.xs(css`
    .wrap-ctx {
      position: absolute;
      top:-11px;
    }

    .list-ctx {
      display:none;
    }

    .button-ctx {
      width: 1700px;
    }

    .icon-ctx {
      justify-content: center;
      align-items: center;      
    }

  `)}
`;
