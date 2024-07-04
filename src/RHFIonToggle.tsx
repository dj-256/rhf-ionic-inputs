import { IonToggle, type ToggleChangeEventDetail } from "@ionic/react";
import type { IonToggleCustomEvent, JSX } from "@ionic/core/components";

type AdditionalProps = {
  onChange: (event: IonToggleCustomEvent<ToggleChangeEventDetail<any>>) => void;
  onBlur?: ((event: IonToggleCustomEvent<void>) => void) | undefined;
};
export const RHFIonToggle = ({
  onChange,
  onBlur,
  ...rest
}: JSX.IonToggle &
  Omit<JSX.IonSearchbar, "onIonChange"> &
  Omit<JSX.IonSearchbar, "onIonBlur"> &
  AdditionalProps) => {
  return <IonToggle {...rest} onIonChange={onChange} onIonBlur={onBlur} />;
};
