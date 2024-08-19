
import { CloseOutlined, DoneOutlined } from "@mui/icons-material";

type Dictionary = {
  ESTADO: {
    ERROR: {
      ICONO: () => JSX.Element;
      CLASS: string;
    };
    SUCCESS: {
      ICONO: () => JSX.Element;
      CLASS: string;
    };
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const DICTONARY: Dictionary = {
  ESTADO: {
    ERROR: {
      ICONO: () => <CloseOutlined className="text-error-dark" />,
      CLASS: 'error',
    },
    SUCCESS: {
      ICONO: () => <DoneOutlined className="text-success-dark" />,
      CLASS: 'success',
    },
  },
};

