# Magic Modal

Magic Modal is a package developped for the Project 14 of Open Classroom Front End Developer's study branch.

This package is a simple modal usable with React +16.8 hooks.

## Installation

### NPM

`npm install @raven0us/magic-react-modal`

## Usage

```
import MagicModal from "@raven0us/magic-react-modal";

const App = () => {
    const [openModal, setOpenModal] = React.useState(false);

    return (
    <MagicModal
        isOpen={openModal}
        setOpen={setOpenModal}
        onClose={() => console.log("Modal has been closed !")}
    >
        {/* Content of Modal */}
    </MagicModal>
    )
}

```

## Props

```
MagicModal.propTypes = {
  children: PropTypes.node.isRequired,

  // Management
  isOpen: PropTypes.bool.isRequired, // React useState value
  setOpen: PropTypes.func.isRequired, // React useState func
  onClose: PropTypes.func, // Callback executed when the modal has been closed

  // Mask
  maskColor: PropTypes.string, // Personnalize the mask color

  // Modal Container
  backgroundColor: PropTypes.string, // Personnalize the container background
};

MagicModal.defaultProps = {
  maskColor: "#00000080",
  backgroundColor: "#ffffff",
  onClose: () => {},
};
```