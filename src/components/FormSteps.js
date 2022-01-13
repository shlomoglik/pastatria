import * as React from 'react';
import { Step, StepLabel, Stepper, useMediaQuery } from '@mui/material';
import { useAppCtx } from '../data/appContext';
import { useLocation } from 'react-router-dom';

export default function FormStep() {
    const { formSteps, setActiveStep } = useAppCtx()
    const path = useLocation().pathname
    const matches = useMediaQuery('(max-width:520px)');

    return (
        path.indexOf("/system") > -1 ? null :
            <Stepper style={{ 'width': 'max-content' }} orientation={matches ?"vertical" : "horizontal"} >
                {formSteps.map(({ id, label, active }) => (
                    <Step key={id} style={{ 'cursor': 'pointer' }} onClick={() => setActiveStep(id)} active={active}>
                        <StepLabel sx={[{ '& span:last-child': { padding: '.5rem' } }]} style={{ cursor: 'pointer', padding: '.2rem' }}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
    );
}