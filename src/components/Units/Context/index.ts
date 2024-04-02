import { html, css } from "iares";
import { UContainer } from '@/components/Units';
import { FamImage, FamTitle } from "fam-code-ui";
import { mediaQueries } from "@/services/mediaQueries";

const media = mediaQueries();

const template = () => html`
  <${UContainer}>
    <slot target="content" ctx="u-context">
      <div class="grid grid-cols-12">
        <div class="
          xxl-col-4
          xl-col-4
          lg-col-4
          sm-col-12
          xs-col-12
        ">
        <div class="title-ctx">
          <${FamTitle}>
            <slot target="content">
              <h2>Stay  happ on your daily life.Stay from stress and regular problems</h2>
            </slot>
          </>          
        </div>
        </div>
        <div class="
          xxl-col-4
          xl-col-4
          lg-col-4
          sm-col-12
          xs-col-12
        ">
          <div class="text-ctx">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              nesciunt cum impedit modi saepe praesentium temporibus, 
              odit ratione laudantium? Omnis.
            </p>
          </div>     
        </div>
        <div class="
          xxl-col-4
          xl-col-4
          lg-col-4
          sm-col-12
          sm-row-start-1
          xs-col-12
          xs-row-start-1
        ">
          <div class="image-ctx">
            <${FamImage} 
              src="/assets/images/image.png" 
              fallbackSrc="/assets/images/fallback-black.png"
              alt="image" 
            />           
          </div>
        </div>
      </div>    
    </slot>      
  </>
`;

export const UContext = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  u-context {
    display: flex;
    width:100%;
    text-align: center;
    padding:5em 0;
    background:#fff;
    line-height: 1.6em;
  }
  .title-ctx {
    font-weight: bold;
  }

  ${media.sm(css`
    .title-ctx,
    .text-ctx {
      padding:0 !important';
    }
  `)}

  ${media.xs(css`
    .title-ctx,
    .text-ctx {
      padding:0 !important';
    }
  `)}
`;
