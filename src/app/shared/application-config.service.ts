import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ApplicationConfigService {
    private _useExpansionUnitsSelected = false;
    private _useAdvancedTacticCardsSelected = false;
    private _movementVariantSelected = false;
    private _deploymentVariantSelected = false;
    private _unplayableMissionsVariantSelected = false;
    private _assignmentActionCardSelected = false;

    constructor() { }

    public get useExpansionUnitsSelected() {
        return this._useExpansionUnitsSelected;
    }

    public get useAdvancedTacticCardsSelected() {
        return this._useAdvancedTacticCardsSelected;
    }

    public get movementVariantSelected() {
        return this._movementVariantSelected;
    }

    public get deploymentVariantSelected() {
        return this._deploymentVariantSelected;
    }

    public get unplayableMissionsVariantSelected() {
        return this._unplayableMissionsVariantSelected;
    }

    public get assignmentActionCardSelected() {
        return this._assignmentActionCardSelected;
    }

    public set useExpansionUnitsSelected(v : boolean) {
        this._useExpansionUnitsSelected = v;
    }

    public set useAdvancedTacticCardsSelected(v : boolean) {
        this._useAdvancedTacticCardsSelected = v;
    }

    public set movementVariantSelected(v : boolean) {
        this._movementVariantSelected = v;
    }

    public set deploymentVariantSelected(v : boolean) {
        this._deploymentVariantSelected = v;
    }

    public set unplayableMissionsVariantSelected(v : boolean) {
        this._unplayableMissionsVariantSelected = v;
    }

    public set assignmentActionCardSelected(v : boolean) {
        this._assignmentActionCardSelected = v;
    }

}
