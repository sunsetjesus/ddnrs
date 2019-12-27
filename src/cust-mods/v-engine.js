const utf8 = require("utf8");
const bn = require('bignumber.js');


var v_engine = {
    
    init : function(data){
        this.raw_h_str = data;
        this.parse_hex_str();
        this.decode_hex_str();
    },
    
    global  : {
        prefix_utf8 : "1NCSMuVcq33nRDLa5LNGkQY2PgfzMVhPp6",
        prefix_hex  : "314E43534D7556637133336E52444C61354C4E476B5159325067667A4D5668507036",
        
        hex_spc   : {
            p : "0x",
            b : 2,
            prefix : 34,
            version_no : 2,
            dnr_id : 8,
            gdnr_id : 8,
            ext : 128,
            sld : 512,
            ssld : 128,
            r_hash : 32,
            r_pubkey : 32,
            r_sign : null,
            
        }
        
    },
    
    local_temp : {
            prefix      : null,
            version     : null,
            dnr_id      : null,
            gdnr_id     : null,
            ext         : null,
            sld         : null,
            sub_ext     : null,
            r_hash      : null,
            r_pubkey    : null,
            r_sig       : null,   
    },
    
    
    is_valid_hex   : function(){
        let c_array = this.raw_h_str.split("");
        let is_valid = true;
        c_array.forEach(val=>{
            let h = parseInt(val,16);
            if(h.toString(16) !== val.toLocaleLowerCase()){
                is_valid = false;
            }   
        })
        return is_valid

    },
    
    is_valid_token : function(){
           
    },
    

    hex_to_utf8 : function (h) {
        var string = '';
        for (var i = 0; i < h.length; i += 2) {
          string += String.fromCharCode(parseInt(h.substr(i, 2), 16));
        }
        return string;
     },
    hex_to_dec : function(h){
         let x = new bn(h,16);
         return x;
     },
    
    parse_hex_str : function(){
         if(this.is_valid_hex(this.raw_h_str)){
             let temp = {};
             temp.prefix = this.global.hex_spc.p+this.raw_h_str.substr(0,this.global.hex_spc.b*this.global.hex_spc.prefix); 
             temp.version_no = this.raw_h_str.substr(this.global.hex_spc.b*this.global.hex_spc.prefix,this.global.hex_spc.b*this.global.hex_spc.version_no); 
             temp.dnr_id = this.raw_h_str.substr(this.global.hex_spc.b*this.global.hex_spc.version_no,this.global.hex_spc.b*this.global.hex_spc.dnr_id); 
             temp.gdnr_id = this.raw_h_str.substr(this.global.hex_spc.b*this.global.hex_spc.dnr_id,this.global.hex_spc.b*this.global.hex_spc.gdnr_id); 
             temp.ext = this.raw_h_str.substr(this.global.hex_spc.b*this.global.hex_spc.gdnr_id,this.global.hex_spc.b*this.global.hex_spc.ext); 
             temp.sld = this.raw_h_str.substr(this.global.hex_spc.b*this.global.hex_spc.ext,this.global.hex_spc.b*this.global.hex_spc.sld); 
             temp.ssld = this.raw_h_str.substr(this.global.hex_spc.b*this.global.hex_spc.sld,this.global.hex_spc.b*this.global.hex_spc.ssld); 
             temp.r_hash = this.raw_h_str.substr(this.global.hex_spc.b*this.global.hex_spc.ssld,this.global.hex_spc.b*this.global.hex_spc.r_hash); 
             temp.r_pubkey = this.raw_h_str.substr(this.global.hex_spc.b*this.global.hex_spc.r_hash,this.global.hex_spc.b*this.global.hex_spc.r_pubkey); 
             temp.r_sign = this.raw_h_str.substr(this.global.hex_spc.b*this.global.hex_spc.r_pubkey);
             
             this.parsed_r_obj = temp;
         } 
        
    },
    
    decode_hex_str : function(){
          console.log(this.hex_to_dec(0xFFF).toString(10))
    }
    
    
    
}

v_engine.init("314E43534D7556637133336E52444C61354C4E476B5159325067667A4D56685070361354C4E476B5159325067667A4D5668507036")