

import './App.style.scss';

import React    from 'react';

import { ClicklessProvider  } from "../react/Providers/Clickless/clickless.provider";
import { NavigatorProvider  } from "../react/Providers/Navigator/navigator.provider";

import useDisableHover from "../react/Hooks/useDisableHover";

import NavBar   from "../Components/Navigation/NavBar/NavBar.component";
import Header   from "../Components/Ui/Header/Header.component";
import Endpoints   from "../Components/Navigation/Endpoints/Endpoints.component";

import Utp      from "../Components/Sections/utp/Utp.component";
import Features from "../Components/Sections/features/Features.component";
import Summary  from "../Components/Sections/summary/Summary.component";
import Contacts from "../Components/Sections/contacts/Contacts.component";
import About    from "../Components/Sections/about/About.component";

import Calibration from "../Components/Ui/Calibration/Calibration.component";
import WebgazerModule from "../react/Providers/Clickless/WebgazerModule.class";
import { ThemeLoader } from "../Components/Ui/Loaders/Loader/Loader.component";
import { CSSTransition } from "react-transition-group";
import { ThemeBackdrop } from "../Components/Ui/Backdrop/Backdrop.component";
import Dialog from "../Components/Ui/Dialog/Dialog.component";
import ModalPopup from "../Components/Ui/Popups/ModalPopup/ModalPopup.component";
import RegularText from "../Components/Ui/Text/RegularText/RegularText.component";
import { ThemePopup } from "../Components/Ui/Popups/Popup/Popup.component";
import { DialogButton } from "../Components/Ui/Controls/Button/Button.component";
import ModalLoader from "../Components/Ui/Loaders/ModalLoader/ModalLoader.component";

import { Categories } from "../Components/Ui/Controls/Button/Views/DialogButton/DialogButton.component";
import Page from "../Components/Models/Page/Page";
import Section from "../Components/Models/Page/Section";


const DialogContainer = ModalPopup(ThemeBackdrop, ThemePopup);

const pages = [
    new Page("/", "main", "Main",
        [
            new Section("Utp", "utp", "Utp title", Utp),
            new Section("Features", "features", "Features title", Features),
            new Section("Summary", "summary", "Summary title", Summary),
        ]
    ),
    new Page("/contacts", "contacts", "Contacts",
        [
            new Section("Contacts", "contacts", "Contacts title", Contacts)
        ]
    ),
    new Page("/about", "about", "About us",
        [
            new Section("About us", "about", "About title", About)
        ]
    )
];

const eyesModule = new WebgazerModule("webgazer.commonjs2")

const medias = [
    {
        name: "Instagram",
        url:  "https://www.instagram.com"
    },
    {
        name: "Facebook",
        url:  "https://www.fb.com"
    },
    {
        name: "Twitter",
        url:  "https://www.twitter.com"
    }
];



export default function App() {

    useDisableHover();

    const [isLoading,    setLoading   ] = React.useState(false);
    const [isDialogOpen, setDialogOpen] = React.useState(false);
    const [isTraining,   setTraining  ] = React.useState(false);


    return (
        <>
            <NavigatorProvider pages={pages}>
                <ClicklessProvider
                    dataProvider={eyesModule}
                    onLoadingChanged={isLoading => {
                        if (isLoading)
                            setLoading(isLoading);
                    }}
                    onOperatingChanged={status => {
                        if (status) {
                            setLoading(false);
                            setDialogOpen(true);
                        }
                    }}
                >
                    <main>
                        <Endpoints pages={pages}/>
                    </main>

                    <Header pages={pages} medias={medias}>
                        <NavBar pages={pages} />
                    </Header>
                </ClicklessProvider>
            </NavigatorProvider>

            <CSSTransition in={isTraining} timeout={1000} classNames='calibration' unmountOnExit mountOnEnter>
                <Calibration
                    onEnded={setTraining.bind(null, false)}
                    onCancel={setTraining.bind(null, false)}
                />
            </CSSTransition>

            <Dialog
                IPopup={DialogContainer}
                IDialogButton={DialogButton}

                controls={[
                    {
                        onClick: () => {
                            setDialogOpen(false);
                            setTraining(true);
                        },
                        category: Categories.CONFIRM,
                        label:    "Agree"
                    },
                    {
                        onClick:  setDialogOpen.bind(null, false),
                        category: Categories.REJECT,
                        label:    "Skip"
                    },
                    {
                        onClick:  () => {},
                        category: Categories.NEUTRAL,
                        label:    "More..."
                    }
                ]}

                title={"Clickless interaction warning!"}
                isOpen={isDialogOpen}
            >
                <RegularText classes={["app__message"]}>
                    We recommend you to pass a very short calibration for better user experience.
                </RegularText>
            </Dialog>

            <ModalLoader IBackdrop={ThemeBackdrop} ILoader={ThemeLoader} isLoading={isLoading} fixed />
        </>
    );
}