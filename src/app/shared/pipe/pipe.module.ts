import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyPipe } from './currency/currency.pipe';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [
		CurrencyPipe
	],
	declarations: [
		CurrencyPipe
	]
})

export class PipeModule { }