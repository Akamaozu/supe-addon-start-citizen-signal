module.exports = function( supervisor, signal_to_watch ){
  if( ! signal_to_watch || typeof signal_to_watch != 'string' ) signal_to_watch = 'START-CITIZEN';

  supervisor.noticeboard.watch( 'citizen-signal', signal_to_watch, function( msg ){

    var envelope = msg.notice;
    if( envelope.signal !== signal_to_watch ) return;

    var citizen_to_start = envelope && envelope.data && envelope.data.citizen ? envelope.data.citizen : false,
        citizen = supervisor.get( citizen_to_start );

    if( ! citizen ) throw new Error( 'citizen "' + citizen_to_start + '" is not registered' );

    var is_citizen_running = citizen.hasOwnProperty('ref');

    if( is_citizen_running ) return;
    else supervisor.start( citizen_to_start );
  });
}