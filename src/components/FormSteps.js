import * as React from 'react';
import { Step, StepLabel, Stepper } from '@mui/material';
import { useAppCtx } from '../data/appContext';
import { useLocation } from 'react-router-dom';
import { routeNames } from '../data/routeNames';

export default function FormStep() {
    const { formSteps, setActiveStep } = useAppCtx()
    const path = useLocation().pathname
    return (
        path.indexOf(routeNames.THANK_YOU) ? null :
            <Stepper style={{ 'width': 'max-content' }} >
                {formSteps.map(({ id, label, active }) => (
                    <Step key={id} style={{ 'cursor': 'pointer' }} onClick={() => setActiveStep(id)} active={active}>
                        <StepLabel sx={[{ '& span:last-child': { padding: '.5rem' } }]} style={{ cursor: 'pointer', padding: '.2rem' }}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
    );
}