import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../modal';
import Typography from '../../../ui/typography';
import {
  TYPOGRAPHY,
  FONT_WEIGHT,
  ALIGN_ITEMS,
  DISPLAY,
} from '../../../../helpers/constants/design-system';
import Box from '../../../ui/box';
import withModalProps from '../../../../helpers/higher-order-components/with-modal-props';
import { useI18nContext } from '../../../../hooks/useI18nContext';

const ConvertTokenToNFT = ({ hideModal }) => {
  const t = useI18nContext();
  return (
    <Modal
      onSubmit={() => {
        hideModal();
      }}
      submitText="Yes"
      onCancel={() => hideModal()}
      cancelText={t('cancel')}
      contentClass="convert-token-to-nft-content"
      containerClass="convert-token-to-nft-container"
    >
      <div className="convert-token-to-nft">
        <Box
          marginTop={2}
          display={DISPLAY.INLINE_FLEX}
          alignItems={ALIGN_ITEMS.CENTER}
        >
          <Typography variant={TYPOGRAPHY.H6} fontWeight={FONT_WEIGHT.NORMAL}>
            {t('convertTokenToNFTDescription')}
            {/* <Button
              type="link"
              className="convert-token-to-nft__link"
              rel="noopener noreferrer"
              target="_blank"
              href="https://metamask.zendesk.com/hc/en-us/articles/360015489251"
            >
              {t('learnMore')}
            </Button> */}
          </Typography>
        </Box>
      </div>
    </Modal>
  );
};

ConvertTokenToNFT.propTypes = {
  hideModal: PropTypes.func.isRequired,
};

export default withModalProps(ConvertTokenToNFT);
