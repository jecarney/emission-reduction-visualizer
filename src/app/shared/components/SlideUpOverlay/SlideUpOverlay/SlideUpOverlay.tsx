import { FC, PropsWithChildren } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Container, IconButton } from '@mui/material';

import './SlideUpOverlay.css';

interface SlideUpOverlayProps {
  overlayOpen: boolean;
  closeAction: () => void;
}

const SlideUpOverlay: FC<PropsWithChildren<SlideUpOverlayProps>> = ({
  children,
  overlayOpen,
  closeAction,
}) => (
  <div className={`overlay overlay--${overlayOpen ? 'open' : 'closed'}`}>
    <Container
      sx={{
        color: 'text.primary',
        width: '90%',
        padding: 0,
        display: overlayOpen ? 'flex' : 'none',
      }}
    >
      <div className="close-button">
        <IconButton onClick={closeAction}>
          <CloseIcon />
        </IconButton>
      </div>
      {children}
    </Container>
  </div>
);

export default SlideUpOverlay;
