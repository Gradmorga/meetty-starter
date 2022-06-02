

import './Contacts.style.scss';

import React from 'react';

import DesktopBg1       from "./res/contacts_desktop@1.webp";
import RetinaDesktopBg1 from "./res/contacts_desktop@2.webp";
import MobileBg1        from "./res/contacts_mobile@1.webp";
import RetinaMobileBg1  from "./res/contacts_mobile@2.webp";
import TabletBg1        from "./res/contacts_tablet@1.webp";
import RetinaTabletBg1  from "./res/contacts_tablet@2.webp";

import { getValidator, Type } from "../../Ui/Controls/ValidatableTextField/validators/getValidator";

import Block from "../../Ui/Block/Block.component";
import Picture from "../../Ui/Picture/Picture.component";
import Image from "../../Ui/Image/Image.component";
import Form from "../../Ui/Controls/Form/Form.component";
import HeadingTitle from "../../Ui/Text/HeadingTitle/HeadingTitle.component";
import RegularText from "../../Ui/Text/RegularText/RegularText.component";
import useFormFields from "../../../react/Hooks/useForm";
import { SlidingButton } from "../../Ui/Controls/Button/Button.component";
import { useFetch, Method } from "../../../react/Hooks/useFetch";
import { Backdrop, ThemeBackdrop } from "../../Ui/Backdrop/Backdrop.component";
import Combobox from "../../Ui/Controls/Combobox/Combobox.component";

import TextField from "../../Ui/Controls/TextField/TextField.component";

import ValidatableField from "../../Ui/Controls/ValidatableTextField/Views/ValidatableField/ValidatableField.component";
import { ValidateLabel } from "../../Ui/Controls/Label/Label.component";
import { ValidateTextLine } from "../../Ui/Controls/TextField/Views/LineView/TextLineView.component";
import { ValidateMessage } from "../../Ui/Controls/Message/Message.component";
import ValidatableTextField from "../../Ui/Controls/ValidatableTextField/ValidatableTextField.component";
import { ValidateTextAreaView } from "../../Ui/Controls/TextField/Views/AreaView/TextAreaView.component";
import ComboboxView from "../../Ui/Controls/Combobox/Views/ComboboxView/ComboboxView.component";
import { ValidatableLabelField }
    from "../../Ui/ComboboxFields/LabelField/LabelField.component";
import { ThemeLabelOption } from "../../Ui/Delegates/LabelDelegate/LabelDelegate.component";
import ModalDropdown from "../../Ui/Dropdowns/ModalDropdown/ModalDropdown.component";
import { ThemeDropdown } from "../../Ui/Dropdowns/Dropdown/Dropdown.component";
import { ThemeLoader } from "../../Ui/Loaders/Loader/Loader.component";
import ModalLoader from "../../Ui/Loaders/ModalLoader/ModalLoader.component";
import { ThemedListView } from "../../Ui/Controls/ListView/ListView.component";
import SuggestionModel from "../../Models/List/Suggestion/SuggestionModel";


const Field = ValidatableTextField(TextField);

const LineView = ValidatableField(ValidateLabel, ValidateTextLine, ValidateMessage);
const AreaView = ValidatableField(ValidateLabel, ValidateTextAreaView, ValidateMessage);
const ModalComboboxView = ValidatableField(ValidateLabel, ComboboxView, ValidateMessage);


const ComboboxDropdown = ModalDropdown(Backdrop, ThemeDropdown);


const imageSource = [
    {
        media: "(min-width:1200px)",
        srcSet: [
            DesktopBg1,
            `${RetinaDesktopBg1} 2x`
        ]
    },
    {
        media: "(max-width:767px)",
        srcSet: [
            MobileBg1,
            `${RetinaMobileBg1} 2x`
        ]
    },
    {
        media: "(min-width:768px)",
        srcSet: [
            TabletBg1,
            `${RetinaTabletBg1} 2x`
        ]
    }
];


const Contacts = () => {

    const { loading, send } = useFetch("localhost:3000/feedback");

    const [isFormValid, field, onValueChange, onValidationChange, onSubmit] = useFormFields(
        new Map([
            ["name",    ""],
            ["email",   ""],
            ["subject", ""],
            ["comment", ""],
         ]),
        send.bind(null, Method.POST)
    );

    return (
        <section>
            <Block classes={["contacts"]}>
                <Picture sourcesSet={imageSource}>
                    <Image
                        classes={["contacts__image"]}
                        alt={"Contacts"}
                        srcSet={[DesktopBg1, `${RetinaDesktopBg1} 2x`]}
                    />
                </Picture>

                <div className="contacts__wrapper">

                    <div className="contacts__layout">
                        <div className="contacts__content">
                            <HeadingTitle classes={["contacts__title"]}>
                                Contact title
                            </HeadingTitle>

                            <RegularText classes={["contacts__description"]}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
                                sed do eiusmod tempor incididunt ut labore et<br/>
                                dolore magna aliqua.
                            </RegularText>
                        </div>

                        <Form classes={["contacts__form"]} onSubmit={onSubmit}>

                            <Field
                                classes={["contacts__field"]}
                                label="Name"
                                name="name"
                                required={true}
                                validator={getValidator(Type.NAME)}
                                value={field("name").value}
                                message={field("name").error}
                                onValueChange={onValueChange("name")}
                                onValidation={onValidationChange("name")}

                                FieldView={LineView}
                            />

                            <Field
                                classes={["contacts__field"]}
                                label="Email"
                                name="email"
                                required={true}
                                validator={getValidator(Type.EMAIL)}
                                value={field("email").value}
                                message={field("email").error}
                                onValueChange={onValueChange("email")}
                                onValidation={onValidationChange("email")}

                                FieldView={LineView}
                            />

                            <Combobox
                                classes={["contacts__field"]}
                                View={ModalComboboxView}
                                model={SuggestionModel}
                                label="Subject"
                                value={field("subject").value}
                                onValueChange={onValueChange("subject")}
                                onValidate={onValidationChange("subject")}
                                message={field("subject").error}
                                required={true}
                                ListView={ThemedListView}
                                Delegate={ThemeLabelOption}
                                IDropdown={ComboboxDropdown}
                                IField={ValidatableLabelField}
                            />

                            <Field
                                classes={["contacts__field"]}
                                label="Description"
                                name="comment"
                                required={true}
                                validator={getValidator(Type.COMMENT)}
                                value={field("comment").value}
                                message={field("comment").error}
                                onValueChange={onValueChange("comment")}
                                onValidation={onValidationChange("comment")}

                                FieldView={AreaView}
                            />

                            <SlidingButton
                                classes={["contacts__field", "contacts__submit-button"]}
                                type="submit"
                                disabled={!isFormValid}
                                onClick={onSubmit}
                            >
                                Send
                            </SlidingButton>

                            <ModalLoader IBackdrop={ThemeBackdrop} ILoader={ThemeLoader} isLoading={loading} />
                        </Form>
                    </div>
                </div>
            </Block>
        </section>
    );
};


Contacts.blocks = 1;


export default Contacts;