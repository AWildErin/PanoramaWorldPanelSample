/**
 * Example of typescript usage on panorama world panels.
 * In this example both OnButtonPress will be called by 
 * Hammer IO, and OnVScriptCall will be ran from test3.nut
 */
'use strict';

class Test3
{
    static our_panel = $('#OurPanel');

    static {}

    static OnButtonPress()
    {
        $.Msg("Button was pressed!");

        const label = $.CreatePanel('Label', this.our_panel, '')
        label.text = "Hello world!";
    }

    static OnVScriptCall(text: string)
    {
        $.Msg(`VScript called us! Param: ${text}`)

        const label = $.CreatePanel('Label', this.our_panel, '')
        label.text = `VScript called us! Param: ${text}`;
    }
}