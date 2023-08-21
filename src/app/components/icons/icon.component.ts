import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { SvgIconMap } from './svg-icons';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'nov-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
    @Input() color: string = '';
    @Input() icon: string = '';
    @Input() size = 24;
    @HostBinding('class.nov-icon') hostClass = true;

    @HostBinding('style.width.px')
    @HostBinding('style.height.px')
    @HostBinding('style.lineHeight.px')
    @HostBinding('style.fontSize.px')

    get showSvg(): boolean {
        return !!this.getSvg();
    }

    get svg(): SafeHtml {
        return this.domSanitizer.bypassSecurityTrustHtml(this.getSvg());
    }

    constructor(private readonly domSanitizer: DomSanitizer) { }

    private getSvg(): string {
        return this.icon ? SvgIconMap[this.icon] : '';
    }
}
