/**
 * BUCAPE-TECH — Especificações Completas dos Produtos
 * 
 * COMO USAR:
 *   Incluir este ficheiro ANTES do product-modal.js no HTML:
 *     <script src="product-specs.js"></script>
 *     <script src="product-modal.js"></script>
 *
 *   O product-modal.js irá usar automaticamente o objeto `window.productDetailsOverride`
 *   se estiver definido, caso contrário usa os seus dados internos.
 *
 *   Para integrar, no início do product-modal.js, substitua a declaração de
 *   `const productDetails = { ... }` por:
 *     const productDetails = window.productDetailsOverride || { ... };
 *
 * PRODUTOS (16 no total):
 *   Áudio       : IDs 1–6  (Fone Barda, Airmax TWS, TWS Philips, BlueDoo, Headset Gamer, Earbuds ANC)
 *   Periféricos : IDs 7–9, 14–15  (Teclado, Mouse, Webcam, Mousepad, Hub USB-C)
 *   Monitores   : IDs 10, 16  (Monitor Curvo 27", Monitor 24" IPS)
 *   Componentes : IDs 11–13  (SSD NVMe, RTX 4060, Fonte 750W)
 *
 * Última atualização: Maio 2025
 */

window.productDetailsOverride = {

  /* ================================================================
     ÁUDIO — IDs 1 a 6
     ================================================================ */

  1: {
    brand: 'NGS',
    description: 'Os auriculares Barda oferecem um som rico e envolvente com graves profundos e altos nítidos. Construção robusta com almofadas de couro sintético de alta qualidade para longas sessões de uso sem desconforto.',
    specs: [
      { k: 'Driver',               v: '40 mm Dinâmico' },
      { k: 'Resposta de Frequência', v: '20 Hz – 20 kHz' },
      { k: 'Impedância',           v: '32 Ω' },
      { k: 'Sensibilidade',        v: '108 dB ±3 dB' },
      { k: 'Cabo',                 v: '1,2 m com microfone' },
      { k: 'Conexão',              v: 'Jack 3,5 mm' },
      { k: 'Peso',                 v: '185 g' },
      { k: 'Cor',                  v: 'Preto / Vermelho' },
    ],
    features: ['Microfone Embutido', 'Dobrável', 'Compatível iOS/Android', 'Volume Integrado'],
    rating: 4.3,
    reviews: 128,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&h=600&fit=crop',
    ],
    userReviews: [
      { name: 'Carlos M.', rating: 5, date: 'Abr 2025', text: 'Qualidade incrível para o preço. Graves poderosos e muito confortáveis.' },
      { name: 'Ana S.',    rating: 4, date: 'Mar 2025', text: 'Bom fone, microfone funciona bem. Cabo poderia ser mais resistente.' },
    ],
  },

  2: {
    brand: 'NGS',
    description: 'Os Airmax TWS são earbuds sem fio de última geração com Bluetooth 5.1, proporcionando conexão estável até 10 metros. Estojo de carregamento compacto com bateria de longa duração.',
    specs: [
      { k: 'Bluetooth',        v: '5.1' },
      { k: 'Bateria Earbuds',  v: '5 horas' },
      { k: 'Bateria Estojo',   v: '20 horas total' },
      { k: 'Alcance',          v: '10 m' },
      { k: 'Driver',           v: '6 mm' },
      { k: 'Carga',            v: 'USB-C' },
      { k: 'Resistência',      v: 'IPX4 (respingos)' },
      { k: 'Peso',             v: '5 g cada' },
    ],
    features: ['TWS Sem Fio', 'Bluetooth 5.1', 'IPX4 Resistente', 'Carga USB-C', 'Touch Control'],
    rating: 4.1,
    reviews: 97,
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=600&h=600&fit=crop',
    ],
    userReviews: [
      { name: 'Pedro A.',  rating: 4, date: 'Mai 2025', text: 'Excelentes earbuds. Som limpo, conexão estável. Estojo muito prático.' },
      { name: 'Luana F.',  rating: 4, date: 'Abr 2025', text: 'Bom produto pelo preço. Só queria mais opções de tamanho dos gominhos.' },
    ],
  },

  3: {
    brand: 'Philips',
    description: 'Os fones TWS da Philips combinam design elegante com tecnologia de ponta. Proporciona isolamento passivo de ruído e uma experiência sonora equilibrada e detalhada para todos os géneros musicais.',
    specs: [
      { k: 'Bluetooth',   v: '5.0' },
      { k: 'Bateria',     v: '6 h (earbuds) + 24 h (estojo)' },
      { k: 'Driver',      v: '8 mm' },
      { k: 'Codec',       v: 'SBC / AAC' },
      { k: 'Resistência', v: 'IPX5' },
      { k: 'Microfone',   v: 'Duplo com CVC 8.0' },
      { k: 'Latência',    v: '< 100 ms' },
      { k: 'Carga',       v: 'USB-C / 1,5 h' },
    ],
    features: ['TWS Verdadeiro', 'IPX5 Waterproof', 'Modo Mono', 'Assistente de Voz', 'CVC 8.0 Noise Cancel'],
    rating: 4.5,
    reviews: 214,
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1631867675167-90a456a90863?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop',
    ],
    userReviews: [
      { name: 'Miguel R.', rating: 5, date: 'Mai 2025', text: 'Melhor compra que já fiz. Som excepcional e bateria que dura o dia todo.' },
      { name: 'Sofia P.',  rating: 4, date: 'Abr 2025', text: 'Muito bom! Confortável para uso prolongado. Ligação estável.' },
    ],
  },

  4: {
    brand: 'Logitech',
    description: 'Os BlueDoo TWS são botões compactos com design ergonómico que se adaptam perfeitamente ao canal auditivo. Cancelamento de ruído passivo para focar na música em qualquer ambiente.',
    specs: [
      { k: 'Bluetooth',   v: '5.0' },
      { k: 'Bateria',     v: '4 h + 16 h (estojo)' },
      { k: 'Driver',      v: '6 mm Dinâmico' },
      { k: 'Codec',       v: 'SBC' },
      { k: 'Resistência', v: 'IPX4' },
      { k: 'Carga',       v: 'Micro-USB' },
      { k: 'Peso',        v: '4,5 g cada' },
      { k: 'Cores',       v: 'Preto, Branco, Azul' },
    ],
    features: ['Design Compacto', 'IPX4', 'Controlo Táctil', 'Compatível Alexa / Siri'],
    rating: 3.9,
    reviews: 76,
    images: [
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1608156639585-b3a776c73b95?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop',
    ],
    userReviews: [
      { name: 'João M.',  rating: 4, date: 'Mar 2025', text: 'Muito fácil de usar. Encaixam bem e o som é surpreendentemente bom.' },
      { name: 'Clara V.', rating: 4, date: 'Fev 2025', text: 'Bom custo-benefício. Uso para treinos, resistente ao suor.' },
    ],
  },

  5: {
    brand: 'Razer',
    description: 'O Headset Gamer Pro X foi criado para gamers exigentes. Com drivers de 50mm de neodímio e som surround virtual 7.1, cada detalhe sonoro do jogo é reproduzido com precisão cirúrgica. Ideal para gaming competitivo.',
    specs: [
      { k: 'Driver',          v: '50 mm Neodímio' },
      { k: 'Resposta de Freq.', v: '12 Hz – 28 kHz' },
      { k: 'Impedância',      v: '32 Ω' },
      { k: 'Microfone',       v: 'Cardioide retrátil' },
      { k: 'Som Surround',    v: 'Virtual 7.1 (USB)' },
      { k: 'Conexão',         v: 'USB + Jack 3,5 mm' },
      { k: 'RGB',             v: 'Razer Chroma (16,8 M cores)' },
      { k: 'Peso',            v: '320 g' },
    ],
    features: ['Surround 7.1 Virtual', 'RGB Chroma', 'Microfone Retrátil', 'THX Spatial Audio', 'Memory Foam'],
    rating: 4.7,
    reviews: 389,
    images: [
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1612444530582-fc66183b16f7?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&h=600&fit=crop',
    ],
    userReviews: [
      { name: 'Rui G.',   rating: 5, date: 'Mai 2025', text: 'Headset fantástico! O surround 7.1 faz toda a diferença em jogos FPS. Muito confortável.' },
      { name: 'Tânia L.', rating: 5, date: 'Abr 2025', text: 'Comprei para trabalhar em casa e para gaming. Perfeito para os dois usos!' },
      { name: 'Bruno C.', rating: 4, date: 'Mar 2025', text: 'Excelente qualidade sonora. O cabo poderia ser mais comprido.' },
    ],
  },

  6: {
    brand: 'Samsung',
    description: 'Os Earbuds Noise Cancel trazem a tecnologia ANC (Active Noise Cancellation) para bloquear até 98% do ruído ambiente. Som Hi-Fi com codec LDAC para audiência de alta definição.',
    specs: [
      { k: 'ANC',         v: 'Ativo (até -35 dB)' },
      { k: 'Bluetooth',   v: '5.2 com LDAC' },
      { k: 'Driver',      v: '11 mm + Tweeter 6 mm' },
      { k: 'Bateria',     v: '8 h ANC / 12 h sem ANC' },
      { k: 'Estojo',      v: '36 h total' },
      { k: 'Carga',       v: 'USB-C + Wireless Qi' },
      { k: 'Resistência', v: 'IPX4' },
      { k: 'Latência',    v: 'Game Mode 20 ms' },
    ],
    features: ['ANC -35 dB', 'LDAC Hi-Res', 'Wireless Charging', 'Game Mode 20ms', 'Ambient Mode', 'IPX4'],
    rating: 4.6,
    reviews: 521,
    images: [
      'https://images.unsplash.com/photo-1612444530582-fc66183b16f7?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=600&fit=crop',
    ],
    userReviews: [
      { name: 'Diana K.', rating: 5, date: 'Mai 2025', text: 'O ANC é impressionante. Uso no metro e o silêncio é total. Som Hi-Fi incrível!' },
      { name: 'Hugo T.',  rating: 5, date: 'Abr 2025', text: 'Melhor investimento do ano. A carga wireless no estojo é um luxo.' },
    ],
  },

  /* ================================================================
     PERIFÉRICOS — IDs 7, 8, 9, 14, 15
     ================================================================ */

  7: {
    brand: 'Logitech',
    description: 'Teclado mecânico de alta performance com switches tácteis para gaming e produtividade. Retroiluminação RGB completa programável por tecla com software Logitech G HUB. Construção em alumínio premium.',
    specs: [
      { k: 'Switch',       v: 'Logitech GX Blue (Clicky)' },
      { k: 'Layout',       v: 'ABNT2 PT-BR' },
      { k: 'RGB',          v: 'Por tecla, 16,8 M cores' },
      { k: 'Software',     v: 'Logitech G HUB' },
      { k: 'Conexão',      v: 'USB 2.0 (braided cable)' },
      { k: 'Anti-ghosting', v: 'N-Key Rollover' },
      { k: 'Frame',        v: 'Alumínio escovado' },
      { k: 'Dimensões',    v: '443 × 132 × 34 mm' },
    ],
    features: ['Switches Mecânicos', 'RGB Personalizado', 'N-Key Rollover', 'Frame Alumínio', 'Macro Keys'],
    rating: 4.8,
    reviews: 302,
    images: [
      'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&h=600&fit=crop',
    ],
    userReviews: [
      { name: 'Alex P.', rating: 5, date: 'Mai 2025', text: 'Simplesmente o melhor teclado mecânico que já tive. O som dos clicks é satisfatório.' },
      { name: 'Rita M.', rating: 5, date: 'Abr 2025', text: 'Qualidade de construção impecável. O RGB com G HUB é muito personalizável.' },
    ],
  },

  8: {
    brand: 'Logitech',
    description: 'Mouse gamer com sensor óptico HERO 25K de alta precisão, 25.600 DPI ajustável e tecnologia LIGHTSPEED para conexão sem fio de alta performance. Zero lag, bateria de 70 horas.',
    specs: [
      { k: 'Sensor',       v: 'HERO 25K' },
      { k: 'DPI',          v: '100 – 25.600 (ajustável)' },
      { k: 'Conexão',      v: 'USB / LIGHTSPEED 2.4 GHz' },
      { k: 'Bateria',      v: '70 horas (sem RGB)' },
      { k: 'Botões',       v: '11 programáveis' },
      { k: 'Peso',         v: '101 g' },
      { k: 'RGB',          v: 'Logitech LIGHTSYNC' },
      { k: 'Polling Rate', v: '1000 Hz' },
    ],
    features: ['Sensor HERO 25K', 'LIGHTSPEED Wireless', '70h Bateria', 'LIGHTSYNC RGB', '11 Botões', 'Ambidestro'],
    rating: 4.9,
    reviews: 648,
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1563297007-0686b7370f80?w=600&h=600&fit=crop',
    ],
    userReviews: [
      { name: 'Mário S.', rating: 5, date: 'Mai 2025', text: 'Mouse perfeito para gaming competitivo. O sensor HERO 25K é extremamente preciso.' },
      { name: 'Inês C.',  rating: 5, date: 'Mai 2025', text: 'Bateria dura semanas! LIGHTSPEED é realmente sem latência. Compra obrigatória.' },
    ],
  },

  9: {
    brand: 'HP',
    description: 'Webcam Full HD 1080p com autofocus e campo de visão de 90°, ideal para videoconferências, streaming e trabalho remoto. Microfone estéreo com cancelamento de ruído integrado.',
    specs: [
      { k: 'Resolução',      v: '1920 × 1080 (Full HD)' },
      { k: 'Frame Rate',     v: '30 fps' },
      { k: 'Campo de Visão', v: '90°' },
      { k: 'Autofocus',      v: 'Sim, automático' },
      { k: 'Microfone',      v: 'Estéreo com ANC' },
      { k: 'Conexão',        v: 'USB-A 2.0' },
      { k: 'Compatibilidade', v: 'Windows, Mac, Linux' },
      { k: 'Fixação',        v: 'Clipe universal' },
    ],
    features: ['Full HD 1080p', 'Autofocus', 'Microfone ANC', 'Plug & Play', 'Campo 90°', 'Compatível Zoom/Teams'],
    rating: 4.4,
    reviews: 183,
    images: [
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=600&h=600&fit=crop',
    ],
    userReviews: [
      { name: 'Fernanda O.', rating: 4, date: 'Abr 2025', text: 'Imagem nítida e instalação instantânea. Microfone capta bem a voz.' },
      { name: 'Nuno B.',     rating: 5, date: 'Mar 2025', text: 'Excelente para reuniões online. O autofocus é muito responsivo.' },
    ],
  },

  14: {
    brand: 'Razer',
    description: 'Mousepad XL Gaming com superfície micro-texturada otimizada para sensores ópticos e laser. Base de borracha antiderrapante com espessura de 3mm. Dimensões extra largas para movimentos amplos.',
    specs: [
      { k: 'Dimensões',     v: '900 × 400 mm (XL)' },
      { k: 'Espessura',     v: '3 mm' },
      { k: 'Material Sup.', v: 'Micro-textura fina' },
      { k: 'Base',          v: 'Borracha antiderrapante' },
      { k: 'Bordas',        v: 'Costuradas resistentes' },
      { k: 'Optimizado para', v: 'Óptico e Laser' },
      { k: 'Cuidados',      v: 'Lavável à mão' },
      { k: 'Cor',           v: 'Preto' },
    ],
    features: ['Tamanho XL 900×400', 'Bordas Costuradas', 'Antiderrapante', 'Lavável', 'Sensor Óptico/Laser'],
    rating: 4.5,
    reviews: 159,
    images: [
      'https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=600&fit=crop',
    ],
    userReviews: [
      { name: 'Paulo G.',    rating: 5, date: 'Mai 2025', text: 'O tamanho XL é fantástico. Cobre toda a área do teclado e mouse com espaço a sobrar.' },
      { name: 'Mariana T.', rating: 4, date: 'Abr 2025', text: 'Superfície suave e deslize perfeito para o meu sensor. Muito satisfeita.' },
    ],
  },

  15: {
    brand: 'HP',
    description: 'Hub USB-C 7 em 1 com suporte a DisplayPort 4K@60Hz, carregamento Power Delivery 100W e transferência de dados ultrarrápida. Compatível com MacBook, iPad Pro, Surface e outros dispositivos USB-C.',
    specs: [
      { k: 'Portas',          v: '7 em 1' },
      { k: 'USB-C PD',        v: '100 W Pass-through' },
      { k: 'HDMI',            v: '4K@60 Hz' },
      { k: 'USB-A',           v: '3 × USB 3.0 (5 Gbps)' },
      { k: 'SD / microSD',    v: 'UHS-I (104 MB/s)' },
      { k: 'Ethernet',        v: 'Gigabit RJ-45' },
      { k: 'Material',        v: 'Alumínio' },
      { k: 'Compatibilidade', v: 'Mac, Windows, Chrome OS' },
    ],
    features: ['4K@60Hz HDMI', 'PD 100W', 'Gigabit Ethernet', 'SD+microSD', 'USB 3.0 × 3', 'Alumínio'],
    rating: 4.3,
    reviews: 221,
    images: [
      'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
    ],
    userReviews: [
      { name: 'Filipa A.', rating: 4, date: 'Mai 2025', text: 'Exatamente o que precisava para o meu MacBook. 4K fluido e carregamento rápido.' },
      { name: 'Renato M.', rating: 5, date: 'Abr 2025', text: 'Qualidade do alumínio impressionante. Não aquece e funciona perfeitamente.' },
    ],
  },

  /* ================================================================
     MONITORES — IDs 10, 16
     ================================================================ */

  10: {
    brand: 'Samsung',
    description: 'Monitor curvo 27" com painel VA 1500R e frequência de 165 Hz para gaming fluido e imersivo. HDR10 com 1000:1 de contraste e 95% do espaço de cores sRGB para cores vibrantes.',
    specs: [
      { k: 'Tamanho',           v: '27" (68,4 cm)' },
      { k: 'Resolução',         v: '2560 × 1440 (QHD)' },
      { k: 'Painel',            v: 'VA Curvo 1500R' },
      { k: 'Taxa de Atualiz.',  v: '165 Hz' },
      { k: 'Tempo de Resposta', v: '1 ms (MPRT)' },
      { k: 'HDR',               v: 'HDR10' },
      { k: 'sRGB',              v: '95%' },
      { k: 'Portas',            v: 'HDMI 2.0 × 2, DP 1.2 × 1' },
    ],
    features: ['165 Hz QHD', 'Curvo 1500R', 'HDR10', 'FreeSync Premium', '1 ms MPRT', 'VESA 100×100'],
    rating: 4.6,
    reviews: 274,
    images: [
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1547480053-7d174f67b557?w=600&h=600&fit=crop',
    ],
    userReviews: [
      { name: 'Gabriel N.', rating: 5, date: 'Mai 2025', text: 'Monitor incrível! O curvo imersivo transforma completamente a experiência de jogo.' },
      { name: 'Vera L.',    rating: 4, date: 'Abr 2025', text: 'Qualidade de imagem excelente. Fácil de configurar e montar.' },
    ],
  },

  16: {
    brand: 'Philips',
    description: 'Monitor Full HD de 24" com tecnologia IPS para cores precisas e ângulos de visão amplos. Design ultrafino sem bordas com suporte ajustável em altura. Perfeito para escritório e uso doméstico.',
    specs: [
      { k: 'Tamanho',           v: '24" (60,5 cm)' },
      { k: 'Resolução',         v: '1920 × 1080 (Full HD)' },
      { k: 'Painel',            v: 'IPS Ultrafino' },
      { k: 'Taxa de Atualiz.',  v: '75 Hz' },
      { k: 'Tempo de Resp.',    v: '4 ms (GtG)' },
      { k: 'Brilho',            v: '250 cd/m²' },
      { k: 'Portas',            v: 'HDMI 1.4, VGA, USB Hub' },
      { k: 'Ajuste',            v: 'Altura, inclinação, rotação' },
    ],
    features: ['IPS Wide Angle', '75 Hz', 'Sem Bordas', 'Flicker-Free', 'Low Blue Light', 'VESA 100×100'],
    rating: 4.2,
    reviews: 134,
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1547480053-7d174f67b557?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop',
    ],
    userReviews: [
      { name: 'Leonor F.', rating: 4, date: 'Abr 2025', text: 'Monitor excelente para o preço. Cores vibrantes e ângulo de visão muito bom.' },
      { name: 'Sérgio P.', rating: 4, date: 'Mar 2025', text: 'Ajuste em altura é muito útil para trabalhar por longas horas. Recomendo.' },
    ],
  },

  /* ================================================================
     COMPONENTES — IDs 11, 12, 13
     ================================================================ */

  11: {
    brand: 'ASUS',
    description: 'SSD NVMe Gen4 de 1 TB com velocidades de leitura sequencial até 7.000 MB/s. Interface PCIe 4.0 para máxima performance em sistemas modernos. Ideal para carregamento ultrarrápido de jogos e edição de vídeo 4K.',
    specs: [
      { k: 'Capacidade',   v: '1 TB' },
      { k: 'Interface',    v: 'PCIe 4.0 × 4, NVMe 1.4' },
      { k: 'Leitura Seq.', v: '7.000 MB/s' },
      { k: 'Escrita Seq.', v: '6.500 MB/s' },
      { k: 'NAND',         v: '3D TLC' },
      { k: 'Cache',        v: 'DRAM integrado' },
      { k: 'Garantia',     v: '5 anos' },
      { k: 'TBW',          v: '600 TBW' },
    ],
    features: ['PCIe 4.0 Gen4', '7000 MB/s Leitura', 'DRAM Cache', 'RGB Opcional', '5 Anos Garantia', 'Dissipador Incluído'],
    rating: 4.8,
    reviews: 412,
    images: [
      'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1631128533001-5e9de31e5e65?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&h=600&fit=crop',
    ],
    userReviews: [
      { name: 'Diogo F.',    rating: 5, date: 'Mai 2025', text: 'Velocidade absolutamente insana! O Windows arranca em menos de 5 segundos.' },
      { name: 'Catarina M.', rating: 5, date: 'Abr 2025', text: 'Instalei para edição de vídeo 4K. A diferença em relação ao SATA é brutal.' },
    ],
  },

  12: {
    brand: 'ASUS',
    description: 'A RTX 4060 é a GPU ideal para gaming 1080p e 1440p com ray tracing fluido. Arquitetura Ada Lovelace com DLSS 3, Frame Generation e tecnologia AV1. 8 GB GDDR6 com eficiência energética superior.',
    specs: [
      { k: 'GPU',         v: 'NVIDIA GeForce RTX 4060' },
      { k: 'VRAM',        v: '8 GB GDDR6' },
      { k: 'CUDA Cores',  v: '3072' },
      { k: 'Boost Clock', v: '2460 MHz' },
      { k: 'TDP',         v: '115 W' },
      { k: 'Portas',      v: 'HDMI 2.1, DP 1.4 × 3' },
      { k: 'DLSS',        v: '3.0 com Frame Generation' },
      { k: 'Ray Tracing', v: '3ª Geração' },
    ],
    features: ['DLSS 3 Frame Gen', 'Ada Lovelace', 'RTX Ray Tracing', 'AV1 Encode/Decode', 'Dual Fans', 'RGB AURA'],
    rating: 4.7,
    reviews: 567,
    images: [
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1555618254-4f4e38fd5f7b?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1587202372583-49330a15584d?w=600&h=600&fit=crop',
    ],
    userReviews: [
      { name: 'Tiago R.', rating: 5, date: 'Mai 2025', text: 'Perfeita para 1440p. DLSS 3 com Frame Gen entrega mais de 165 fps nos meus jogos favoritos.' },
      { name: 'Lara M.',  rating: 5, date: 'Mai 2025', text: 'Eficiência energética impressionante. Consome pouco e dá muito desempenho.' },
    ],
  },

  13: {
    brand: 'Lenovo',
    description: 'Fonte de alimentação modular 750W certificada 80+ Gold. Cabos modulares para montagem limpa e organizada. Proteções múltiplas (OVP, UVP, OCP, OTP) para máxima segurança dos seus componentes.',
    specs: [
      { k: 'Potência',        v: '750 W' },
      { k: 'Certificação',    v: '80+ Gold (92% eficiência)' },
      { k: 'Modularidade',    v: 'Totalmente modular' },
      { k: 'Ventilador',      v: '135 mm FDB semi-passivo' },
      { k: 'ATX12V',          v: '3.0' },
      { k: 'Conectores GPU',  v: '2 × 8-pin PCIe' },
      { k: 'Garantia',        v: '7 anos' },
      { k: 'Proteções',       v: 'OVP / UVP / OCP / OTP / SCP' },
    ],
    features: ['80+ Gold', 'Totalmente Modular', 'Semi-Passivo', '7 Anos Garantia', 'ATX 3.0', 'Proteções Múltiplas'],
    rating: 4.6,
    reviews: 198,
    images: [
      'https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&h=600&fit=crop',
    ],
    userReviews: [
      { name: 'André V.',   rating: 5, date: 'Abr 2025', text: 'Fonte silenciosa e eficiente. O modo semi-passivo a baixa carga é uma delícia.' },
      { name: 'Beatriz S.', rating: 4, date: 'Mar 2025', text: 'Cabos de boa qualidade e comprimento adequado. Recomendo a todos.' },
    ],
  },

};