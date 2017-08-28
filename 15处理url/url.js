var url = 
(function () {


  function analysisUrl( location ) {
    // 传入的 东西 支持 location 对象 或 字符串
    location = location || window.location;
    var target = location.href ? location : document.createElement( 'a' );
    typeof location === 'string' && ( target.href = location ); 
  
    // 开始解析了
    var tmp = {
      hash: target.hash && target.hash.slice( 1 ),
      host: target.host,
      hostname: target.hostname,
      href: target.href,
      pathname: target.pathname,
      port: target.port || '80',
      protocol: target.protocol,
      search: (function () {
        var s = target.search;
        if ( !s ) return s;
        var tmp = {};
        s.slice( 1 ).split( '&' ).forEach( item => {
          var kv = item.split( '=' );
          tmp[ kv[ 0 ] ] = decodeURIComponent( kv[ 1 ] );
        } );
        return tmp;
      })()                                  // ?k=v&k=v&k=v
    }
  
    return tmp;
  }
  
  return {
    __anaylisis__: analysisUrl,
    getSearch: function ( key, location ) {
      var tmp = analysisUrl( location );
      return key ? tmp.search[ key ] : tmp.search;
    }
  };
  

})();