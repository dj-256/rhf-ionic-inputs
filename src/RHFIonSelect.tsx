import { IonSelect, type SelectChangeEventDetail } from "@ionic/react";
import type { IonSelectCustomEvent, JSX } from "@ionic/core/components";

type AdditionalProps = {
  onChange: (event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) => void;
  onBlur?: ((event: IonSelectCustomEvent<void>) => void) | undefined;
};

export const RHFIonSelect = ({
  onChange,
  onBlur,
  ...rest
}: JSX.IonSelect & AdditionalProps) => {
  return <IonSelect {...rest} onIonChange={onChange} onIonBlur={onBlur} />;
};
