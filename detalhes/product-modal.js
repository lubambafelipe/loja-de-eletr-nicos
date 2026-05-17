/**
 * BUCAPE-TECH — Modal de Detalhe de Produto
 * 
 * COMO USAR:
 *  1. Adicionar <link rel="stylesheet" href="product-modal.css"> no <head>
 *  2. Adicionar <script src="product-modal.js"></script> ANTES de fechar o </body>
 *     (depois de main.js)
 *
 * Este ficheiro:
 *  - Injeta o HTML do modal no <body>
 *  - Enriquece os dados dos produtos com specs, descrição, reviews, etc.
 *  - Adiciona o botão de lupa (quick-view) em cada card de produto
 */

(function () {
  'use strict';

  /* ============================================================
     1. DADOS ENRIQUECIDOS DOS PRODUTOS
     Chave = product.id (igual ao array `products` em main.js)
     ============================================================ */
  const productDetails = {
    1: {
      brand: 'NGS',
      description: 'Os auriculares Barda oferecem um som rico e envolvente com graves profundos e altos nítidos. Construção robusta com almofadas de couro sintético de alta qualidade para longas sessões de uso sem desconforto.',
      specs: [
        { k: 'Driver', v: '40 mm Dinâmico' },
        { k: 'Resposta de Frequência', v: '20 Hz – 20 kHz' },
        { k: 'Impedância', v: '32 Ω' },
        { k: 'Sensibilidade', v: '108 dB ±3 dB' },
        { k: 'Cabo', v: '1,2 m com microfone' },
        { k: 'Conexão', v: 'Jack 3,5 mm' },
        { k: 'Peso', v: '185 g' },
        { k: 'Cor', v: 'Preto / Vermelho' },
      ],
      features: ['Microfone Embutido', 'Dobrável', 'Compatível iOS/Android', 'Volume Integrado'],
      rating: 4.3, reviews: 128,
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&h=600&fit=crop',
      ],
      userReviews: [
        { name: 'Carlos M.', rating: 5, date: 'Abr 2026', text: 'Qualidade incrível para o preço. Graves poderosos e muito confortáveis.' },
        { name: 'Ana S.', rating: 4, date: 'Mar 2026', text: 'Bom fone, microfone funciona bem. Cable poderia ser mais resistente.' },
      ],
    },
    2: {
      brand: 'NGS',
      description: 'Os Airmax TWS são earbuds sem fio de última geração com Bluetooth 5.1, proporcionando conexão estável até 10 metros. Estojo de carregamento compacto com bateria de longa duração.',
      specs: [
        { k: 'Bluetooth', v: '5.1' },
        { k: 'Bateria Earbuds', v: '5 horas' },
        { k: 'Bateria Estojo', v: '20 horas total' },
        { k: 'Alcance', v: '10 m' },
        { k: 'Driver', v: '6 mm' },
        { k: 'Carga', v: 'USB-C' },
        { k: 'Resistência', v: 'IPX4 (respingos)' },
        { k: 'Peso', v: '5 g cada' },
      ],
      features: ['TWS Sem Fio', 'Bluetooth 5.1', 'IPX4 Resistente', 'Carga USB-C', 'Touch Control'],
      rating: 4.1, reviews: 97,
      images: [
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=600&h=600&fit=crop',
      ],
      userReviews: [
        { name: 'Pedro A.', rating: 4, date: 'Mai 2026', text: 'Excelentes earbuds. Som limpo, conexão estável. Estojo muito prático.' },
        { name: 'Luana F.', rating: 4, date: 'Abr 2026', text: 'Bom produto pelo preço. Só queria mais opções de tamanho dos gominhos.' },
      ],
    },
    3: {
      brand: 'Philips',
      description: 'Os fones TWS da Philips combinam design elegante com tecnologia de ponta. Proporciona isolamento passivo de ruído e uma experiência sonora equilibrada e detalhada para todos os géneros musicais.',
      specs: [
        { k: 'Bluetooth', v: '5.0' },
        { k: 'Bateria', v: '6 h (earbuds) + 24 h (estojo)' },
        { k: 'Driver', v: '8 mm' },
        { k: 'Codec', v: 'SBC / AAC' },
        { k: 'Resistência', v: 'IPX5' },
        { k: 'Microfone', v: 'Duplo com CVC 8.0' },
        { k: 'Latência', v: '< 100 ms' },
        { k: 'Carga', v: 'USB-C / 1,5 h' },
      ],
      features: ['TWS Verdadeiro', 'IPX5 Waterproof', 'Modo Mono', 'Assistente de Voz', 'CVC 8.0 Noise Cancel'],
      rating: 4.5, reviews: 214,
      images: [
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1631867675167-90a456a90863?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop',
      ],
      userReviews: [
        { name: 'Miguel R.', rating: 5, date: 'Mai 2026', text: 'Melhor compra que já fiz. Som excepcional e bateria que dura o dia todo.' },
        { name: 'Sofia P.', rating: 4, date: 'Abr 2026', text: 'Muito bom! Confortável para uso prolongado. Ligação estável.' },
      ],
    },
    4: {
      brand: 'Logitech',
      description: 'Os BlueDoo TWS são botões compactos com design ergonómico que se adaptam perfeitamente ao canal auditivo. Cancelamento de ruído passivo para focar na música em qualquer ambiente.',
      specs: [
        { k: 'Bluetooth', v: '5.0' },
        { k: 'Bateria', v: '4 h + 16 h (estojo)' },
        { k: 'Driver', v: '6 mm Dinâmico' },
        { k: 'Codec', v: 'SBC' },
        { k: 'Resistência', v: 'IPX4' },
        { k: 'Carga', v: 'Micro-USB' },
        { k: 'Peso', v: '4,5 g cada' },
        { k: 'Cores', v: 'Preto, Branco, Azul' },
      ],
      features: ['Design Compacto', 'IPX4', 'Controlo Táctil', 'Compatível Alexa / Siri'],
      rating: 3.9, reviews: 76,
      images: [
        'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1608156639585-b3a776c73b95?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop',
      ],
      userReviews: [
        { name: 'João M.', rating: 4, date: 'Mar 2025', text: 'Muito fácil de usar. Encaixam bem e o som é surpreendentemente bom.' },
        { name: 'Clara V.', rating: 4, date: 'Fev 2025', text: 'Bom custo-benefício. Uso para treinos, resistente ao suor.' },
      ],
    },
    5: {
      brand: 'Razer',
      description: 'O Headset Gamer Pro X foi criado para gamers exigentes. Com drivers de 50mm de neodímio e som surround virtual 7.1, cada detalhe sonoro do jogo é reproduzido com precisão cirúrgica. Ideal para gaming competitivo.',
      specs: [
        { k: 'Driver', v: '50 mm Neodímio' },
        { k: 'Resposta de Freq.', v: '12 Hz – 28 kHz' },
        { k: 'Impedância', v: '32 Ω' },
        { k: 'Microfone', v: 'Cardioide retrátil' },
        { k: 'Som Surround', v: 'Virtual 7.1 (USB)' },
        { k: 'Conexão', v: 'USB + Jack 3,5 mm' },
        { k: 'RGB', v: 'Razer Chroma (16,8 M cores)' },
        { k: 'Peso', v: '320 g' },
      ],
      features: ['Surround 7.1 Virtual', 'RGB Chroma', 'Microfone Retrátil', 'THX Spatial Audio', 'Memory Foam'],
      rating: 4.7, reviews: 389,
      images: [
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1612444530582-fc66183b16f7?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&h=600&fit=crop',
      ],
      userReviews: [
        { name: 'Rui G.', rating: 5, date: 'Mai 2025', text: 'Headset fantástico! O surround 7.1 faz toda a diferença em jogos FPS. Muito confortável.' },
        { name: 'Tânia L.', rating: 5, date: 'Abr 2025', text: 'Comprei para trabalhar em casa e para gaming. Perfeito para os dois usos!' },
        { name: 'Bruno C.', rating: 4, date: 'Mar 2025', text: 'Excelente qualidade sonora. O cabo poderia ser mais comprido.' },
      ],
    },
    6: {
      brand: 'Samsung',
      description: 'Os Earbuds Noise Cancel trazem a tecnologia ANC (Active Noise Cancellation) para bloquear até 98% do ruído ambiente. Som Hi-Fi com codec LDAC para audiência de alta definição.',
      specs: [
        { k: 'ANC', v: 'Ativo (até -35 dB)' },
        { k: 'Bluetooth', v: '5.2 com LDAC' },
        { k: 'Driver', v: '11 mm + Tweeter 6 mm' },
        { k: 'Bateria', v: '8 h ANC / 12 h sem ANC' },
        { k: 'Estojo', v: '36 h total' },
        { k: 'Carga', v: 'USB-C + Wireless Qi' },
        { k: 'Resistência', v: 'IPX4' },
        { k: 'Latência', v: 'Game Mode 20 ms' },
      ],
      features: ['ANC -35 dB', 'LDAC Hi-Res', 'Wireless Charging', 'Game Mode 20ms', 'Ambient Mode', 'IPX4'],
      rating: 4.6, reviews: 521,
      images: [
        'https://images.unsplash.com/photo-1612444530582-fc66183b16f7?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=600&fit=crop',
      ],
      userReviews: [
        { name: 'Diana K.', rating: 5, date: 'Mai 2025', text: 'O ANC é impressionante. Uso no metro e o silêncio é total. Som Hi-Fi incrível!' },
        { name: 'Hugo T.', rating: 5, date: 'Abr 2025', text: 'Melhor investimento do ano. A carga wireless no estojo é um luxo.' },
      ],
    },
    7: {
      brand: 'Logitech',
      description: 'Teclado mecânico de alta performance com switches tácteis para gaming e produtividade. Retroiluminação RGB completa programável por tecla com software Logitech G HUB. Construção em alumínio premium.',
      specs: [
        { k: 'Switch', v: 'Logitech GX Blue (Clicky)' },
        { k: 'Layout', v: 'ABNT2 PT-BR' },
        { k: 'RGB', v: 'Por tecla, 16,8 M cores' },
        { k: 'Software', v: 'Logitech G HUB' },
        { k: 'Conexão', v: 'USB 2.0 (braided cable)' },
        { k: 'Anti-ghosting', v: 'N-Key Rollover' },
        { k: 'Frame', v: 'Alumínio escovado' },
        { k: 'Dimensões', v: '443 × 132 × 34 mm' },
      ],
      features: ['Switches Mecânicos', 'RGB Personalizado', 'N-Key Rollover', 'Frame Alumínio', 'Macro Keys'],
      rating: 4.8, reviews: 302,
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
        { k: 'Sensor', v: 'HERO 25K' },
        { k: 'DPI', v: '100 – 25.600 (ajustável)' },
        { k: 'Conexão', v: 'USB / LIGHTSPEED 2.4 GHz' },
        { k: 'Bateria', v: '70 horas (sem RGB)' },
        { k: 'Botões', v: '11 programáveis' },
        { k: 'Peso', v: '101 g' },
        { k: 'RGB', v: 'Logitech LIGHTSYNC' },
        { k: 'Polling Rate', v: '1000 Hz' },
      ],
      features: ['Sensor HERO 25K', 'LIGHTSPEED Wireless', '70h Bateria', 'LIGHTSYNC RGB', '11 Botões', 'Ambidestro'],
      rating: 4.9, reviews: 648,
      images: [
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1563297007-0686b7370f80?w=600&h=600&fit=crop',
      ],
      userReviews: [
        { name: 'Mário S.', rating: 5, date: 'Mai 2025', text: 'Mouse perfeito para gaming competitivo. O sensor HERO 25K é extremamente preciso.' },
        { name: 'Inês C.', rating: 5, date: 'Mai 2025', text: 'Bateria dura semanas! LIGHTSPEED é realmente sem latência. Compra obrigatória.' },
      ],
    },
    9: {
      brand: 'HP',
      description: 'Webcam Full HD 1080p com autofocus e campo de visão de 90°, ideal para videoconferências, streaming e trabalho remoto. Microfone estéreo com cancelamento de ruído integrado.',
      specs: [
        { k: 'Resolução', v: '1920 × 1080 (Full HD)' },
        { k: 'Frame Rate', v: '30 fps' },
        { k: 'Campo de Visão', v: '90°' },
        { k: 'Autofocus', v: 'Sim, automático' },
        { k: 'Microfone', v: 'Estéreo com ANC' },
        { k: 'Conexão', v: 'USB-A 2.0' },
        { k: 'Compatibilidade', v: 'Windows, Mac, Linux' },
        { k: 'Fixação', v: 'Clipe universal' },
      ],
      features: ['Full HD 1080p', 'Autofocus', 'Microfone ANC', 'Plug & Play', 'Campo 90°', 'Compatível Zoom/Teams'],
      rating: 4.4, reviews: 183,
      images: [
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=600&h=600&fit=crop',
      ],
      userReviews: [
        { name: 'Fernanda O.', rating: 4, date: 'Abr 2025', text: 'Imagem nítida e instalação instantânea. Microfone capta bem a voz.' },
        { name: 'Nuno B.', rating: 5, date: 'Mar 2025', text: 'Excelente para reuniões online. O autofocus é muito responsivo.' },
      ],
    },
    10: {
      brand: 'Samsung',
      description: 'Monitor curvo 27" com painel VA 1500R e frequência de 165 Hz para gaming fluido e imersivo. HDR10 com 1000:1 de contraste e 95% do espaço de cores sRGB para cores vibrantes.',
      specs: [
        { k: 'Tamanho', v: '27" (68,4 cm)' },
        { k: 'Resolução', v: '2560 × 1440 (QHD)' },
        { k: 'Painel', v: 'VA Curvo 1500R' },
        { k: 'Taxa de Atualiz.', v: '165 Hz' },
        { k: 'Tempo de Resposta', v: '1 ms (MPRT)' },
        { k: 'HDR', v: 'HDR10' },
        { k: 'sRGB', v: '95%' },
        { k: 'Portas', v: 'HDMI 2.0 × 2, DP 1.2 × 1' },
      ],
      features: ['165 Hz QHD', 'Curvo 1500R', 'HDR10', 'FreeSync Premium', '1 ms MPRT', 'VESA 100×100'],
      rating: 4.6, reviews: 274,
      images: [
        'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1547480053-7d174f67b557?w=600&h=600&fit=crop',
      ],
      userReviews: [
        { name: 'Gabriel N.', rating: 5, date: 'Mai 2025', text: 'Monitor incrível! O curvo imersivo transforma completamente a experiência de jogo.' },
        { name: 'Vera L.', rating: 4, date: 'Abr 2025', text: 'Qualidade de imagem excelente. Fácil de configurar e montar.' },
      ],
    },
    11: {
      brand: 'ASUS',
      description: 'SSD NVMe Gen4 de 1 TB com velocidades de leitura sequencial até 7.000 MB/s. Interface PCIe 4.0 para máxima performance em sistemas modernos. Ideal para carregamento ultrarrápido de jogos e edição de vídeo 4K.',
      specs: [
        { k: 'Capacidade', v: '1 TB' },
        { k: 'Interface', v: 'PCIe 4.0 × 4, NVMe 1.4' },
        { k: 'Leitura Seq.', v: '7.000 MB/s' },
        { k: 'Escrita Seq.', v: '6.500 MB/s' },
        { k: 'NAND', v: '3D TLC' },
        { k: 'Cache', v: 'DRAM integrado' },
        { k: 'Garantia', v: '5 anos' },
        { k: 'TBW', v: '600 TBW' },
      ],
      features: ['PCIe 4.0 Gen4', '7000 MB/s Leitura', 'DRAM Cache', 'RGB Opcional', '5 Anos Garantia', 'Dissipador Incluído'],
      rating: 4.8, reviews: 412,
      images: [
        'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1631128533001-5e9de31e5e65?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&h=600&fit=crop',
      ],
      userReviews: [
        { name: 'Diogo F.', rating: 5, date: 'Mai 2025', text: 'Velocidade absolutamente insana! O Windows arranca em menos de 5 segundos.' },
        { name: 'Catarina M.', rating: 5, date: 'Abr 2025', text: 'Instalei para edição de vídeo 4K. A diferença em relação ao SATA é brutal.' },
      ],
    },
    12: {
      brand: 'ASUS',
      description: 'A RTX 4060 é a GPU ideal para gaming 1080p e 1440p com ray tracing fluido. Arquitetura Ada Lovelace com DLSS 3, Frame Generation e tecnologia AV1. 8 GB GDDR6 com eficiência energética superior.',
      specs: [
        { k: 'GPU', v: 'NVIDIA GeForce RTX 4060' },
        { k: 'VRAM', v: '8 GB GDDR6' },
        { k: 'CUDA Cores', v: '3072' },
        { k: 'Boost Clock', v: '2460 MHz' },
        { k: 'TDP', v: '115 W' },
        { k: 'Portas', v: 'HDMI 2.1, DP 1.4 × 3' },
        { k: 'DLSS', v: '3.0 com Frame Generation' },
        { k: 'Ray Tracing', v: '3ª Geração' },
      ],
      features: ['DLSS 3 Frame Gen', 'Ada Lovelace', 'RTX Ray Tracing', 'AV1 Encode/Decode', 'Dual Fans', 'RGB AURA'],
      rating: 4.7, reviews: 567,
      images: [
        'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1555618254-4f4e38fd5f7b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1587202372583-49330a15584d?w=600&h=600&fit=crop',
      ],
      userReviews: [
        { name: 'Tiago R.', rating: 5, date: 'Mai 2025', text: 'Perfeita para 1440p. DLSS 3 com Frame Gen entrega mais de 165 fps nos meus jogos favoritos.' },
        { name: 'Lara M.', rating: 5, date: 'Mai 2025', text: 'Eficiência energética impressionante. Consome pouco e dá muito desempenho.' },
      ],
    },
    13: {
      brand: 'Lenovo',
      description: 'Fonte de alimentação modular 750W certificada 80+ Gold. Cabos modulares para montagem limpa e organizada. Proteções múltiplas (OVP, UVP, OCP, OTP) para máxima segurança dos seus componentes.',
      specs: [
        { k: 'Potência', v: '750 W' },
        { k: 'Certificação', v: '80+ Gold (92% eficiência)' },
        { k: 'Modularidade', v: 'Totalmente modular' },
        { k: 'Ventilador', v: '135 mm FDB semi-passivo' },
        { k: 'ATX12V', v: '3.0' },
        { k: 'Conectores GPU', v: '2 × 8-pin PCIe' },
        { k: 'Garantia', v: '7 anos' },
        { k: 'Proteções', v: 'OVP / UVP / OCP / OTP / SCP' },
      ],
      features: ['80+ Gold', 'Totalmente Modular', 'Semi-Passivo', '7 Anos Garantia', 'ATX 3.0', 'Proteções Múltiplas'],
      rating: 4.6, reviews: 198,
      images: [
        'https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&h=600&fit=crop',
      ],
      userReviews: [
        { name: 'André V.', rating: 5, date: 'Abr 2025', text: 'Fonte silenciosa e eficiente. O modo semi-passivo a baixa carga é uma delícia.' },
        { name: 'Beatriz S.', rating: 4, date: 'Mar 2025', text: 'Cabos de boa qualidade e comprimento adequado. Recomendo a todos.' },
      ],
    },
    14: {
      brand: 'Razer',
      description: 'Mousepad XL Gaming com superfície micro-texturada otimizada para sensores ópticos e laser. Base de borracha antiderrapante com espessura de 3mm. Dimensões extra largas para movimentos amplos.',
      specs: [
        { k: 'Dimensões', v: '900 × 400 mm (XL)' },
        { k: 'Espessura', v: '3 mm' },
        { k: 'Material Sup.', v: 'Micro-textura fina' },
        { k: 'Base', v: 'Borracha antiderrapante' },
        { k: 'Bordas', v: 'Costuradas resistentes' },
        { k: 'Optimizado para', v: 'Óptico e Laser' },
        { k: 'Cuidados', v: 'Lavável à mão' },
        { k: 'Cor', v: 'Preto' },
      ],
      features: ['Tamanho XL 900×400', 'Bordas Costuradas', 'Antiderrapante', 'Lavável', 'Sensor Óptico/Laser'],
      rating: 4.5, reviews: 159,
      images: [
        'https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=600&fit=crop',
      ],
      userReviews: [
        { name: 'Paulo G.', rating: 5, date: 'Mai 2025', text: 'O tamanho XL é fantástico. Cobre toda a área do teclado e mouse com espaço a sobrar.' },
        { name: 'Mariana T.', rating: 4, date: 'Abr 2025', text: 'Superfície suave e deslize perfeito para o meu sensor. Muito satisfeita.' },
      ],
    },
    15: {
      brand: 'HP',
      description: 'Hub USB-C 7 em 1 com suporte a DisplayPort 4K@60Hz, carregamento Power Delivery 100W e transferência de dados ultrarrápida. Compatível com MacBook, iPad Pro, Surface e outros dispositivos USB-C.',
      specs: [
        { k: 'Portas', v: '7 em 1' },
        { k: 'USB-C PD', v: '100 W Pass-through' },
        { k: 'HDMI', v: '4K@60 Hz' },
        { k: 'USB-A', v: '3 × USB 3.0 (5 Gbps)' },
        { k: 'SD / microSD', v: 'UHS-I (104 MB/s)' },
        { k: 'Ethernet', v: 'Gigabit RJ-45' },
        { k: 'Material', v: 'Alumínio' },
        { k: 'Compatibilidade', v: 'Mac, Windows, Chrome OS' },
      ],
      features: ['4K@60Hz HDMI', 'PD 100W', 'Gigabit Ethernet', 'SD+microSD', 'USB 3.0 × 3', 'Alumínio'],
      rating: 4.3, reviews: 221,
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
    16: {
      brand: 'Philips',
      description: 'Monitor Full HD de 24" com tecnologia IPS para cores precisas e ângulos de visão amplos. Design ultrafino sem bordas com suporte ajustável em altura. Perfeito para escritório e uso doméstico.',
      specs: [
        { k: 'Tamanho', v: '24" (60,5 cm)' },
        { k: 'Resolução', v: '1920 × 1080 (Full HD)' },
        { k: 'Painel', v: 'IPS Ultrafino' },
        { k: 'Taxa de Atualiz.', v: '75 Hz' },
        { k: 'Tempo de Resp.', v: '4 ms (GtG)' },
        { k: 'Brilho', v: '250 cd/m²' },
        { k: 'Portas', v: 'HDMI 1.4, VGA, USB Hub' },
        { k: 'Ajuste', v: 'Altura, inclinação, rotação' },
      ],
      features: ['IPS Wide Angle', '75 Hz', 'Sem Bordas', 'Flicker-Free', 'Low Blue Light', 'VESA 100×100'],
      rating: 4.2, reviews: 134,
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
  };

  /* ============================================================
     2. INJETAR HTML DO MODAL
     ============================================================ */
  function injectModalHTML() {
    if (document.getElementById('productModalOverlay')) return;

    var d = document.createElement('div');
    d.innerHTML = [
      '<div id="productModalOverlay">',
      '  <div class="pm-box" id="pmBox" role="dialog" aria-modal="true" aria-labelledby="pmName">',
      '    <button class="pm-close" id="pmClose" aria-label="Fechar"><i class="fas fa-times"></i></button>',
      '    <div class="pm-grid">',
      '      <div class="pm-gallery" id="pmGallery">',
      '        <button class="pm-nav-prev" id="pmNavPrev" aria-label="Anterior"><i class="fas fa-chevron-left"></i></button>',
      '        <button class="pm-nav-next" id="pmNavNext" aria-label="Proximo"><i class="fas fa-chevron-right"></i></button>',
      '        <div class="pm-main-img-wrap" id="pmMainImgWrap">',
      '          <img src="" alt="" id="pmMainImg">',
      '          <div class="pm-sale-ribbon" id="pmSaleRibbon" style="display:none">OFERTA</div>',
      '        </div>',
      '        <div class="pm-thumbs" id="pmThumbs"></div>',
      '      </div>',
      '      <div class="pm-info">',
      '        <div class="pm-brand-row-top">',
      '          <span class="pm-brand-badge" id="pmBrand">&#8212;</span>',
      '          <span class="pm-cat-badge" id="pmCat">&#8212;</span>',
      '        </div>',
      '        <h2 class="pm-name" id="pmName">&#8212;</h2>',
      '        <div class="pm-stars"><span class="stars" id="pmStars"></span><span class="review-count" id="pmReviewCount"></span></div>',
      '        <div class="pm-price-row">',
      '          <span class="pm-price" id="pmPrice">&#8212;</span>',
      '          <span class="pm-price-orig" id="pmPriceOrig" style="display:none"></span>',
      '          <span class="pm-discount-pct" id="pmDiscountPct" style="display:none"></span>',
      '        </div>',
      '        <p class="pm-desc" id="pmDesc"></p>',
      '        <hr class="pm-divider">',
      '        <div class="pm-meta-list">',
      '          <div class="pm-meta-row"><span class="pm-meta-label">REF:</span> <span id="pmRef">&#8212;</span></div>',
      '          <div class="pm-meta-row"><span class="pm-meta-label">Categoria:</span> <span id="pmCatMeta">&#8212;</span></div>',
      '        </div>',
      '        <div class="pm-stock-row">',
      '          <div class="pm-stock-dot"></div>',
      '          <span class="pm-stock-txt">Em stock &#8212; entrega em Luanda</span>',
      '        </div>',
      '        <div class="pm-share-row">',
      '          <span class="pm-share-label">Share:</span>',
      '          <div class="pm-share-icons">',
      '            <a href="#" class="pm-share-icon" title="Facebook"><i class="fab fa-facebook-f"></i></a>',
      '            <a href="#" class="pm-share-icon" title="X / Twitter"><i class="fab fa-x-twitter"></i></a>',
      '            <a href="#" class="pm-share-icon" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>',
      '            <a href="#" class="pm-share-icon" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>',
      '            <a href="#" class="pm-share-icon" title="Telegram"><i class="fab fa-telegram-plane"></i></a>',
      '          </div>',
      '        </div>',
      '        <div class="pm-cta-row">',
      '          <button class="pm-btn-cart" id="pmAddCart"><i class="fas fa-cart-plus"></i> Adicionar ao Carrinho</button>',
      '          <button class="pm-btn-wish" id="pmWish" title="Favoritar"><i class="far fa-heart"></i></button>',
      '        </div>',
      '      </div>',
      '    </div>',
      '    <div class="pm-bottom">',
      '      <div class="pm-tabs">',
      '        <button class="pm-tab active" data-tab="specs">Especifica&#231;&#245;es</button>',
      '        <button class="pm-tab" data-tab="reviews">Avalia&#231;&#245;es</button>',
      '        <button class="pm-tab" data-tab="guarantee">Garantias</button>',
      '      </div>',
      '      <div class="pm-tab-panel active" id="pmTabSpecs">',
      '        <p class="pm-specs-title">Especifica&#231;&#245;es T&#233;cnicas</p>',
      '        <div class="pm-specs" id="pmSpecs"></div>',
      '        <div style="margin-top:1rem">',
      '          <p class="pm-specs-title" style="margin-bottom:.5rem">Destaques</p>',
      '          <div class="pm-features" id="pmFeatures"></div>',
      '        </div>',
      '      </div>',
      '      <div class="pm-tab-panel" id="pmTabReviews">',
      '        <div class="pm-reviews-summary" id="pmReviewsSummary"></div>',
      '        <div class="pm-review-list" id="pmReviewList"></div>',
      '      </div>',
      '      <div class="pm-tab-panel" id="pmTabGuarantee">',
      '        <div class="pm-guarantees">',
      '          <div class="pm-guarantee"><i class="fas fa-shield-alt"></i><span class="pm-guarantee-txt">Garantia de 12 meses</span></div>',
      '          <div class="pm-guarantee"><i class="fas fa-undo-alt"></i><span class="pm-guarantee-txt">Devolu&#231;&#227;o em 30 dias</span></div>',
      '          <div class="pm-guarantee"><i class="fas fa-truck"></i><span class="pm-guarantee-txt">Entrega r&#225;pida em Luanda</span></div>',
      '          <div class="pm-guarantee"><i class="fas fa-lock"></i><span class="pm-guarantee-txt">Pagamento 100% seguro</span></div>',
      '          <div class="pm-guarantee"><i class="fas fa-headset"></i><span class="pm-guarantee-txt">Suporte t&#233;cnico dedicado</span></div>',
      '          <div class="pm-guarantee"><i class="fas fa-certificate"></i><span class="pm-guarantee-txt">Produtos originais certificados</span></div>',
      '        </div>',
      '      </div>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join('');
    document.body.appendChild(d.firstElementChild);
  }

  /* ============================================================
     3. UTILITÁRIOS
     ============================================================ */
  function formatKz(value) {
    return value.toLocaleString('pt-PT') + ' Kz';
  }

  function starsHTML(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
      if (rating >= i)        html += '<i class="fas fa-star"></i>';
      else if (rating >= i - 0.5) html += '<i class="fas fa-star-half-alt"></i>';
      else                    html += '<i class="far fa-star"></i>';
    }
    return html;
  }

  function getProductById(id) {
    // 'products' é o array global definido em main.js
    if (typeof products !== 'undefined') return products.find(p => p.id === id);
    return null;
  }

  /* ============================================================
     4. ABRIR / FECHAR MODAL
     ============================================================ */
  let currentProductId = null;

  function openProductModal(productId) {
    const base    = getProductById(productId);
    const details = productDetails[productId];
    if (!base || !details) return;

    currentProductId = productId;

    const overlay = document.getElementById('productModalOverlay');

    /* --- Gallery --- */
    const mainImg  = document.getElementById('pmMainImg');
    const thumbsEl = document.getElementById('pmThumbs');
    const images   = details.images && details.images.length ? details.images : [base.image];
    let   imgIndex = 0;

    function setImage(i) {
      imgIndex = (i + images.length) % images.length;
      mainImg.src = images[imgIndex];
      thumbsEl.querySelectorAll('.pm-thumb').forEach((t, ti) => t.classList.toggle('active', ti === imgIndex));
    }

    mainImg.src = images[0];
    mainImg.alt = base.name;

    thumbsEl.innerHTML = '';
    images.forEach((src, i) => {
      const btn = document.createElement('button');
      btn.className = 'pm-thumb' + (i === 0 ? ' active' : '');
      btn.innerHTML = `<img src="${src}" alt="${base.name}" loading="lazy">`;
      btn.addEventListener('click', () => setImage(i));
      thumbsEl.appendChild(btn);
    });

    /* Nav arrows */
    document.getElementById('pmNavPrev').onclick = (e) => { e.stopPropagation(); setImage(imgIndex - 1); };
    document.getElementById('pmNavNext').onclick = (e) => { e.stopPropagation(); setImage(imgIndex + 1); };

    /* Sale ribbon */
    const ribbon = document.getElementById('pmSaleRibbon');
    ribbon.style.display = base.onSale ? '' : 'none';

    /* --- Info: marca e categoria (badges topo) --- */
    document.getElementById('pmBrand').textContent   = details.brand || '—';
    document.getElementById('pmCat').textContent     = base.category || '—';

    /* Nome */
    document.getElementById('pmName').textContent = base.name;

    /* Estrelas */
    document.getElementById('pmStars').innerHTML        = starsHTML(details.rating);
    document.getElementById('pmReviewCount').textContent = details.rating.toFixed(1) + ' (' + details.reviews + ' avalia\u00e7\u00f5es)';

    /* Preço */
    document.getElementById('pmPrice').textContent = formatKz(base.discountedPrice);
    var origEl = document.getElementById('pmPriceOrig');
    var pctEl  = document.getElementById('pmDiscountPct');
    if (base.onSale && base.originalPrice) {
      origEl.textContent   = formatKz(base.originalPrice);
      origEl.style.display = '';
      pctEl.textContent    = '-' + base.discount + '%';
      pctEl.style.display  = '';
    } else {
      origEl.style.display = 'none';
      pctEl.style.display  = 'none';
    }

    /* Descrição */
    document.getElementById('pmDesc').textContent = details.description || '';

    /* REF e Categoria (meta) */
    document.getElementById('pmRef').textContent     = base.id ? String(base.id).padStart(5, '0') : '—';
    document.getElementById('pmCatMeta').textContent = base.category || '—';

    /* Botão Adicionar ao Carrinho */
    var cartBtn = document.getElementById('pmAddCart');
    cartBtn.onclick = function () {
      if (typeof addToCart === 'function') addToCart(productId);
      closeProductModal();
    };

    /* Wishlist toggle */
    var wishBtn = document.getElementById('pmWish');
    wishBtn.classList.remove('active');
    wishBtn.querySelector('i').className = 'far fa-heart';
    wishBtn.onclick = function () {
      wishBtn.classList.toggle('active');
      wishBtn.querySelector('i').className = wishBtn.classList.contains('active') ? 'fas fa-heart' : 'far fa-heart';
    };

    /* --- Tabs --- */
    overlay.querySelectorAll('.pm-tab').forEach(function (tab) {
      tab.onclick = function () {
        overlay.querySelectorAll('.pm-tab').forEach(function (t) { t.classList.remove('active'); });
        overlay.querySelectorAll('.pm-tab-panel').forEach(function (p) { p.classList.remove('active'); });
        tab.classList.add('active');
        var panelId = 'pmTab' + tab.dataset.tab.charAt(0).toUpperCase() + tab.dataset.tab.slice(1);
        var panel = document.getElementById(panelId);
        if (panel) panel.classList.add('active');
      };
    });

    /* Reset tabs para o primeiro */
    overlay.querySelectorAll('.pm-tab').forEach(function (t, i) { t.classList.toggle('active', i === 0); });
    overlay.querySelectorAll('.pm-tab-panel').forEach(function (p, i) { p.classList.toggle('active', i === 0); });

    /* Specs */
    var specsEl = document.getElementById('pmSpecs');
    specsEl.innerHTML = (details.specs || []).map(function (s) {
      return '<div class="pm-spec-row"><span class="pm-spec-key">' + s.k + '</span><span class="pm-spec-val">' + s.v + '</span></div>';
    }).join('');

    /* Features */
    var featIcons = ['fa-check-circle','fa-bolt','fa-wifi','fa-shield-alt','fa-star','fa-microchip','fa-headphones','fa-desktop'];
    var featEl = document.getElementById('pmFeatures');
    featEl.innerHTML = (details.features || []).map(function (f, i) {
      return '<span class="pm-feature-chip"><i class="fas ' + featIcons[i % featIcons.length] + '"></i>' + f + '</span>';
    }).join('');

    /* Reviews */
    buildReviews(details);

    /* Show */
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function buildReviews(details) {
    const rating  = details.rating;
    const reviews = details.reviews;
    const userRevs = details.userReviews || [];

    /* Summary */
    const summaryEl = document.getElementById('pmReviewsSummary');
    const distrib = [85, 70, 45, 20, 5]; // percentagens fictícias das barras
    summaryEl.innerHTML = `
      <div>
        <div class="pm-score-big">${rating.toFixed(1)}</div>
        <div class="pm-score-stars">${starsHTML(rating)}</div>
        <div class="pm-score-label">${reviews} avaliações</div>
      </div>
      <div class="pm-bars">
        ${[5,4,3,2,1].map((star, i) => `
          <div class="pm-bar-row">
            <span>${star}★</span>
            <div class="pm-bar-track">
              <div class="pm-bar-fill" style="width:0%" data-w="${distrib[i]}%"></div>
            </div>
            <span>${distrib[i]}%</span>
          </div>
        `).join('')}
      </div>
    `;

    /* Animate bars after paint */
    requestAnimationFrame(() => {
      summaryEl.querySelectorAll('.pm-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.w;
      });
    });

    /* Review cards */
    const listEl = document.getElementById('pmReviewList');
    listEl.innerHTML = userRevs.map(r => `
      <div class="pm-review-card">
        <div class="pm-review-header">
          <div class="pm-avatar">${r.name.slice(0,2).toUpperCase()}</div>
          <span class="pm-reviewer-name">${r.name}</span>
          <span class="pm-review-date">${r.date}</span>
        </div>
        <div class="pm-review-stars">${starsHTML(r.rating)}</div>
        <p class="pm-review-text">${r.text}</p>
      </div>
    `).join('');
  }

  function closeProductModal() {
    const overlay = document.getElementById('productModalOverlay');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
    currentProductId = null;
  }

  /* ============================================================
     5. ADICIONAR BOTÃO DE LUPA NOS CARDS DE PRODUTO
     Chamado após os cards serem renderizados pelo main.js
     ============================================================ */
  function patchProductCards() {
    /* Cards do carrossel principal — ligar .product-action-search ao modal */
    document.querySelectorAll('#infCarouselTrack .product-card').forEach(card => {
      if (card.dataset.modalPatched) return;

      const addBtn = card.querySelector('.product-btn[onclick]');
      const match  = addBtn && addBtn.getAttribute('onclick').match(/\d+/);
      const pid    = match ? parseInt(match[0]) : null;
      if (!pid) return;

      /* Botão de lupa lateral (.product-action-search) gerado pelo main.js */
      const searchBtn = card.querySelector('.product-action-search');
      if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          openProductModal(pid);
        });
        card.dataset.modalPatched = '1';
      }
    });

    /* Cards da secção Novidades — ligar o nov-action-btn com fa-search */
    document.querySelectorAll('#novidadesGrid .nov-card').forEach(card => {
      if (card.dataset.modalPatched) return;

      const nameEl  = card.querySelector('.nov-card-name');
      const name    = nameEl ? nameEl.textContent : 'Produto';
      const imgEl   = card.querySelector('img');
      const imgSrc  = imgEl ? imgEl.src : '';
      const priceEl = card.querySelector('.nov-card-price');
      const price   = priceEl ? priceEl.textContent : '';

      /* Segundo botão de acção = lupa (comparar, lupa, coração) */
      const searchBtn = card.querySelector('.nov-action-btn:nth-child(2)');
      if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          openNovidadeModal({ name, imgSrc, price });
        });
        card.dataset.modalPatched = '1';
      }
    });
  }

  /* ============================================================
     BASE DE DADOS DE SPECS POR NOME/PADRÃO DE PRODUTO (Novidades)
     Correspondência por palavras-chave no nome do produto
     ============================================================ */
  var novidadeSpecsDB = [
    /* ── Smartphones ── */
    {
      match: /samsung.*galaxy.*s\d|galaxy.*s\d.*ultra|galaxy.*s\d.*plus/i,
      brand: 'Samsung', cat: 'Smartphone',
      desc: 'Smartphone Android de topo com câmera de última geração, ecrã Dynamic AMOLED 2X e processador de alta performance. Ideal para fotografia, gaming e produtividade.',
      specs: [
        { k: 'Ecrã', v: '6,8" Dynamic AMOLED 2X, 120 Hz' },
        { k: 'Processador', v: 'Exynos 2400 / Snapdragon 8 Gen 3' },
        { k: 'RAM / Armazenamento', v: '12 GB / 256 GB' },
        { k: 'Câmera Traseira', v: '200 MP + 10 MP + 12 MP' },
        { k: 'Câmera Frontal', v: '12 MP' },
        { k: 'Bateria', v: '5000 mAh — 45W + Wireless 15W' },
        { k: 'Sistema', v: 'Android 14 + One UI 6.1' },
        { k: 'Resistência', v: 'IP68 — 1,5 m / 30 min' },
        { k: 'Conectividade', v: '5G, Wi-Fi 7, Bluetooth 5.3, NFC' },
        { k: 'Dimensões', v: '162,3 × 79,0 × 8,6 mm — 228 g' },
      ],
      features: ['5G Ready', 'IP68 Waterproof', '200 MP Camera', 'S Pen Compatible', '45W Fast Charge', 'Wi-Fi 7'],
      rating: 4.7, reviews: 312,
    },
    /* ── Galaxy Tab ── */
    {
      match: /samsung.*tab|galaxy.*tab/i,
      brand: 'Samsung', cat: 'Tablet',
      desc: 'Tablet Android premium com ecrã AMOLED de alta resolução, compatível com S Pen e teclado. Perfeito para produtividade, entretenimento e criatividade em movimento.',
      specs: [
        { k: 'Ecrã', v: '12,4" AMOLED, 2800 × 1752, 120 Hz' },
        { k: 'Processador', v: 'Snapdragon 8 Gen 2 (4 nm)' },
        { k: 'RAM / Armazenamento', v: '12 GB / 256 GB — microSD até 1 TB' },
        { k: 'Câmera Traseira', v: '13 MP + 6 MP ultrawide' },
        { k: 'Câmera Frontal', v: '12 MP wide' },
        { k: 'Bateria', v: '10090 mAh — 45W' },
        { k: 'Sistema', v: 'Android 13 + One UI 5.1' },
        { k: 'Conectividade', v: 'Wi-Fi 6E, Bluetooth 5.3, USB-C 3.2' },
        { k: 'S Pen', v: 'Incluído (slot integrado)' },
        { k: 'Dimensões', v: '285,4 × 185,4 × 5,7 mm — 568 g' },
      ],
      features: ['S Pen Incluída', 'AMOLED 120Hz', '45W Fast Charge', 'DeX Mode', 'Wi-Fi 6E', 'USB 3.2'],
      rating: 4.6, reviews: 189,
    },
    /* ── iPhone ── */
    {
      match: /iphone/i,
      brand: 'Apple', cat: 'Smartphone',
      desc: 'Smartphone Apple com chip A17 Pro, câmara de 48 MP com zoom periscópio e ecrã Super Retina XDR com ProMotion 120 Hz. Desempenho de topo em fotografia computacional e gaming.',
      specs: [
        { k: 'Ecrã', v: '6,7" Super Retina XDR, 2796 × 1290, 120 Hz' },
        { k: 'Processador', v: 'Apple A17 Pro (3 nm)' },
        { k: 'RAM / Armazenamento', v: '8 GB / 256 GB (NVMe)' },
        { k: 'Sistema de Câmeras', v: '48 MP + 12 MP + 12 MP (5× Zoom)' },
        { k: 'Câmera Frontal', v: '12 MP TrueDepth' },
        { k: 'Bateria', v: '4422 mAh — USB-C 27W' },
        { k: 'Sistema', v: 'iOS 17' },
        { k: 'Resistência', v: 'IP68 — 6 m / 30 min' },
        { k: 'Conectividade', v: '5G, Wi-Fi 6E, Bluetooth 5.3, UWB, NFC' },
        { k: 'Biometria', v: 'Face ID 3D' },
      ],
      features: ['A17 Pro Chip', 'ProMotion 120Hz', 'USB-C', 'IP68 6m', '5× Optical Zoom', 'Face ID'],
      rating: 4.8, reviews: 524,
    },
    /* ── MacBook / Laptop Apple ── */
    {
      match: /macbook/i,
      brand: 'Apple', cat: 'Laptop',
      desc: 'Laptop Apple com chip M3 Pro de arquitectura ARM, ecrã Liquid Retina XDR e bateria de até 22 horas. O equilíbrio perfeito entre desempenho profissional e portabilidade.',
      specs: [
        { k: 'Processador', v: 'Apple M3 Pro — 12 núcleos CPU' },
        { k: 'GPU', v: '18 núcleos GPU integrada' },
        { k: 'RAM Unificada', v: '18 GB LPDDR5' },
        { k: 'Armazenamento', v: '512 GB SSD NVMe' },
        { k: 'Ecrã', v: '14,2" Liquid Retina XDR, 3024 × 1964, 120 Hz' },
        { k: 'Bateria', v: '70 Wh — até 18 horas' },
        { k: 'Portas', v: '3 × Thunderbolt 4, HDMI 2.1, SD, MagSafe 3' },
        { k: 'Sistema', v: 'macOS Sonoma 14' },
        { k: 'Webcam', v: '12 MP Center Stage' },
        { k: 'Peso', v: '1,77 kg' },
      ],
      features: ['M3 Pro Chip', 'Liquid Retina XDR', 'MagSafe 3', 'Thunderbolt 4 × 3', 'Face ID', 'Wi-Fi 6E'],
      rating: 4.9, reviews: 276,
    },
    /* ── Laptops / Notebooks genéricos ── */
    {
      match: /laptop|notebook|zenbook|vivobook|ideapad|thinkpad|aspire|inspiron|pavilion/i,
      brand: 'ASUS', cat: 'Laptop',
      desc: 'Notebook de alta performance com processador Intel Core i7 de 13ª geração, ecrã OLED e bateria de longa duração. Ideal para trabalho profissional, edição criativa e mobilidade.',
      specs: [
        { k: 'Processador', v: 'Intel Core i7-1360P (13ª Gen, 4,0 GHz)' },
        { k: 'RAM', v: '16 GB DDR5-4800 MHz' },
        { k: 'Armazenamento', v: '512 GB SSD PCIe 4.0 NVMe' },
        { k: 'Ecrã', v: '15,6" OLED FHD 1920×1080, 120 Hz' },
        { k: 'GPU', v: 'NVIDIA GeForce RTX 3050 4 GB' },
        { k: 'Bateria', v: '70 Wh — até 12 horas' },
        { k: 'Sistema', v: 'Windows 11 Home' },
        { k: 'Portas', v: 'USB-C (TB4), 2× USB-A 3.2, HDMI 2.1, SD' },
        { k: 'Webcam', v: 'Full HD 1080p IR (Windows Hello)' },
        { k: 'Peso', v: '1,65 kg' },
      ],
      features: ['Intel 13ª Gen', 'OLED 120Hz', 'RTX 3050', 'Thunderbolt 4', 'Wi-Fi 6E', 'Windows Hello'],
      rating: 4.5, reviews: 203,
    },
    /* ── Smart TV ── */
    {
      match: /tv|smart tv|qled|oled.*tv|neo.*qled/i,
      brand: 'Samsung', cat: 'Smart TV',
      desc: 'Smart TV 4K Neo QLED com tecnologia Mini LED e processador Neural Quantum. Imagem ultra-nítida com HDR10+ e som Dolby Atmos para uma experiência cinematográfica em casa.',
      specs: [
        { k: 'Tamanho', v: '55" (138,8 cm)' },
        { k: 'Resolução', v: '4K UHD — 3840 × 2160' },
        { k: 'Painel', v: 'Neo QLED Mini LED' },
        { k: 'HDR', v: 'HDR10+ Adaptive, HLG' },
        { k: 'Taxa de Atualiz.', v: '144 Hz (Motion Xcelerator)' },
        { k: 'Som', v: 'Dolby Atmos — 60W (4.2.2 ch)' },
        { k: 'Smart TV', v: 'Tizen OS — Samsung Gaming Hub' },
        { k: 'Portas', v: 'HDMI 2.1 × 4, USB × 2, ARC/eARC' },
        { k: 'Conectividade', v: 'Wi-Fi 5, Bluetooth 5.2, AirPlay 2' },
        { k: 'Dimensões', v: '1225 × 705 × 25 mm (sem suporte)' },
      ],
      features: ['Neo QLED 4K', 'HDR10+ Adaptive', '144 Hz Gaming', 'Dolby Atmos', 'AirPlay 2', 'Gaming Hub'],
      rating: 4.7, reviews: 398,
    },
    /* ── Impressoras ── */
    {
      match: /impressora|printer|laserjet|inkjet|deskjet/i,
      brand: 'HP', cat: 'Impressora',
      desc: 'Impressora multifuncional laser monocromática com Wi-Fi, impressão frente-e-verso automática e capacidade de 250 folhas. Ideal para escritório e uso intensivo.',
      specs: [
        { k: 'Tipo', v: 'Laser monocromática' },
        { k: 'Funções', v: 'Imprimir, Copiar, Digitalizar, Fax' },
        { k: 'Velocidade', v: '35 ppm (monocromático)' },
        { k: 'Resolução', v: '1200 × 1200 dpi' },
        { k: 'Capacidade', v: '250 folhas + alimentador 50 fls' },
        { k: 'Duplex', v: 'Automático' },
        { k: 'Conectividade', v: 'Wi-Fi, Ethernet, USB 2.0, AirPrint' },
        { k: 'Compatibilidade', v: 'Windows, macOS, iOS, Android' },
        { k: 'Ciclo Mensal', v: 'Até 50 000 páginas' },
        { k: 'Dimensões', v: '420 × 365 × 295 mm — 12,5 kg' },
      ],
      features: ['35 ppm', 'Duplex Auto', 'AirPrint', 'Wi-Fi Direct', 'Toner HP Original', 'Digitalização OCR'],
      rating: 4.3, reviews: 147,
    },
    /* ── Câmeras fotográficas ── */
    {
      match: /câmera|camera|eos|nikon|sony.*alpha|mirrorless|dslr/i,
      brand: 'Sony', cat: 'Câmera',
      desc: 'Câmera mirrorless de fotograma completo com sensor BSI CMOS de 61 MP, autofoco por detecção de fase em tempo real e gravação de vídeo 4K 120p. Para fotógrafos profissionais exigentes.',
      specs: [
        { k: 'Sensor', v: '61 MP BSI CMOS Full Frame' },
        { k: 'Autofoco', v: 'Phase Detect 693 pontos + Eye AF' },
        { k: 'ISO', v: '100 – 32 000 (expansível 50 – 102 400)' },
        { k: 'Velocidade Obturador', v: '1/8000 s — mecânico' },
        { k: 'Vídeo', v: '4K 120p 10-bit / 8K 24p' },
        { k: 'Estabilização', v: '5 eixos IBIS — até 5,5 stops' },
        { k: 'Ecrã', v: '3" Touch articulado — 1,44 M pts' },
        { k: 'Bateria', v: 'NP-FZ100 — ~580 disparos' },
        { k: 'Conectividade', v: 'Wi-Fi 5 GHz, Bluetooth 5.0, USB-C 3.2' },
        { k: 'Corpo', v: 'Magnésio — selado contra poeira/humidade' },
      ],
      features: ['61 MP Full Frame', '8K Video', 'Eye AF', '5-Axis IBIS', 'Wi-Fi 5GHz', 'Weather Sealed'],
      rating: 4.8, reviews: 431,
    },
    /* ── Consolas / Gaming ── */
    {
      match: /playstation|ps5|xbox|nintendo|switch/i,
      brand: 'Sony', cat: 'Consola',
      desc: 'Consola de nova geração com processador AMD Zen 2 e GPU RDNA 2, suportando ray tracing em tempo real, 8K e SSD ultrarrápido de 825 GB. A experiência de gaming definitiva.',
      specs: [
        { k: 'CPU', v: 'AMD Zen 2 — 8 núcleos / 3,5 GHz' },
        { k: 'GPU', v: 'AMD RDNA 2 — 10,28 TFLOPS' },
        { k: 'RAM', v: '16 GB GDDR6 — 448 GB/s' },
        { k: 'SSD Interno', v: '825 GB — 5,5 GB/s leitura' },
        { k: 'Resolução', v: 'Suporta 4K @ 120fps / 8K' },
        { k: 'Ray Tracing', v: 'Hardware acelerado' },
        { k: 'Áudio', v: 'Tempest 3D AudioTech' },
        { k: 'Leitor', v: 'Ultra HD Blu-ray 4K' },
        { k: 'Conectividade', v: 'Wi-Fi 6, Bluetooth 5.1, USB-A + USB-C' },
        { k: 'Dimensões', v: '390 × 104 × 260 mm — 4,5 kg' },
      ],
      features: ['Ray Tracing', '8K Ready', '120fps Gaming', 'Tempest 3D Audio', 'Wi-Fi 6', 'SSD 5,5 GB/s'],
      rating: 4.8, reviews: 892,
    },
    /* ── Smartwatch / Wearables ── */
    {
      match: /smartwatch|watch|galaxy watch|apple watch|fitbit|garmin/i,
      brand: 'Samsung', cat: 'Smartwatch',
      desc: 'Smartwatch premium com ecrã AMOLED Always-On, sensor de saúde avançado (ECG, SpO2, pressão arterial) e GPS multi-band integrado. Resistente à água até 50 metros.',
      specs: [
        { k: 'Ecrã', v: '1,4" Super AMOLED, 450 × 450 px' },
        { k: 'Processador', v: 'Exynos W930 Dual-Core 1,4 GHz' },
        { k: 'RAM / Armazenamento', v: '2 GB / 16 GB' },
        { k: 'Bateria', v: '590 mAh — até 40 horas' },
        { k: 'Saúde', v: 'ECG, SpO2, Pressão Arterial, Temperatura' },
        { k: 'GPS', v: 'Multi-band — GPS, GLONASS, BeiDou, Galileo' },
        { k: 'Resistência', v: '5ATM + MIL-STD-810H' },
        { k: 'Conectividade', v: 'LTE opcional, Wi-Fi, Bluetooth 5.3, NFC' },
        { k: 'Sensores', v: 'Acelerómetro, Giroscópio, Barômetro' },
        { k: 'Compatibilidade', v: 'Android 10+ / iOS 16+ (funções limitadas)' },
      ],
      features: ['ECG + SpO2', 'GPS Multi-Band', '5ATM Waterproof', 'NFC Pagamentos', 'AMOLED Always On', 'LTE'],
      rating: 4.5, reviews: 267,
    },
    /* ── Ar condicionado / Clima ── */
    {
      match: /ar.condicionado|split|inverter.*btu/i,
      brand: 'Samsung', cat: 'Ar Condicionado',
      desc: 'Ar condicionado split inverter com tecnologia Wind-Free™ para distribuição uniforme do ar sem correntes frias directas. Eficiência energética A+++ com filtro anti-bactérias.',
      specs: [
        { k: 'Capacidade', v: '12 000 BTU/h' },
        { k: 'Tecnologia', v: 'Inverter Digital com Wind-Free™' },
        { k: 'Eficiência', v: 'A+++ — EER 4,2 / COP 4,8' },
        { k: 'Refrigerante', v: 'R-32 (baixo impacto ambiental)' },
        { k: 'Temp. Operação', v: '-15°C a 52°C (aquecimento/arrefec.)' },
        { k: 'Nível de Ruído', v: '18 dB(A) interior (modo Wind-Free)' },
        { k: 'Filtro', v: 'Multi Micro HEPA anti-bactérias' },
        { k: 'Conectividade', v: 'Wi-Fi — controlo via SmartThings App' },
        { k: 'Voltagem', v: '220 V / 50 Hz — Monofásico' },
        { k: 'Área Recomendada', v: '20 – 30 m²' },
      ],
      features: ['Wind-Free™', 'A+++ Eficiência', 'Wi-Fi SmartThings', 'Filtro HEPA', 'R-32 Eco', 'Frio + Calor'],
      rating: 4.6, reviews: 183,
    },
    /* ── Frigoríficos / Electrodomésticos ── */
    {
      match: /frigorífico|geladeira|refrigerador|side.by.side|combinado/i,
      brand: 'Samsung', cat: 'Electrodoméstico',
      desc: 'Frigorífico combinado No-Frost com tecnologia SpaceMax e sistema Twin Cooling Plus para humidade ideal em cada compartimento. Ecrã táctil e dispensador de água integrado.',
      specs: [
        { k: 'Capacidade Total', v: '635 L (frigorífico 425 L + congelador 210 L)' },
        { k: 'Sistema', v: 'No-Frost Total com Twin Cooling Plus™' },
        { k: 'Classificação', v: 'A++ — 310 kWh/ano' },
        { k: 'Temperatura', v: '-23°C a +8°C (ajustável por zona)' },
        { k: 'Nível Ruído', v: '35 dB(A)' },
        { k: 'Dispensador', v: 'Água + Gelo + Ice Maker integrado' },
        { k: 'Painel', v: 'LCD táctil com Family Hub (opcional)' },
        { k: 'Iluminação', v: 'LED em todas as zonas' },
        { k: 'Voltagem', v: '220 V / 50 Hz' },
        { k: 'Dimensões', v: '178 × 91,2 × 71,6 cm — 120 kg' },
      ],
      features: ['No-Frost Total', 'Twin Cooling Plus', 'A++ Energético', 'Ice Maker', 'Dispensador Água', 'LED Interior'],
      rating: 4.4, reviews: 134,
    },
    /* ── Colunas / Altifalantes ── */
    {
      match: /coluna|speaker|soundbar|subwoofer|bose|jbl|sonos/i,
      brand: 'JBL', cat: 'Coluna de Som',
      desc: 'Coluna Bluetooth portátil com certificação IP67, som com graves profundos e tweeter de alta frequência. Até 24 horas de autonomia com possibilidade de conexão em modo estéreo.',
      specs: [
        { k: 'Potência', v: '40W RMS (2 × 20W)' },
        { k: 'Resposta de Freq.', v: '55 Hz – 20 kHz' },
        { k: 'Bluetooth', v: '5.3 — alcance 15 m' },
        { k: 'Bateria', v: '10 000 mAh — até 24 horas' },
        { k: 'Resistência', v: 'IP67 — impermeável e à prova de poeira' },
        { k: 'Carga', v: 'USB-C 30W — carregamento 3,5 h' },
        { k: 'Modos', v: 'Stereo, PartyBoost (até 100 colunas), Speakerphone' },
        { k: 'Codec', v: 'SBC, AAC, aptX' },
        { k: 'Peso', v: '1,95 kg' },
        { k: 'Cores', v: 'Preto, Azul, Vermelho, Cinza' },
      ],
      features: ['IP67 Waterproof', '24h Bateria', 'PartyBoost', 'aptX Audio', 'Speakerphone', 'USB-C Charge'],
      rating: 4.6, reviews: 318,
    },
    /* ── Routers / Networking ── */
    {
      match: /router|wi.fi|mesh|modem|roteador/i,
      brand: 'ASUS', cat: 'Router',
      desc: 'Router Wi-Fi 6 tri-band com velocidade agregada de 10 Gbps, processador quad-core e suporte a WPA3. Cobertura até 250 m² com tecnologia MU-MIMO e OFDMA para múltiplos dispositivos.',
      specs: [
        { k: 'Padrão Wi-Fi', v: 'Wi-Fi 6 (802.11ax)' },
        { k: 'Velocidade', v: '10 Gbps (2,4G: 1148 + 5G: 4804 + 5G: 4804)' },
        { k: 'Bandas', v: 'Tri-band — 2,4 GHz + 5 GHz × 2' },
        { k: 'Processador', v: 'Quad-Core 1,8 GHz' },
        { k: 'RAM / Flash', v: '1 GB DDR4 / 256 MB' },
        { k: 'Portas', v: '2,5 GbE WAN × 1, GbE LAN × 4' },
        { k: 'Segurança', v: 'WPA3, AiProtection Pro (Trend Micro)' },
        { k: 'Antenas', v: '8 × antenas externas' },
        { k: 'Cobertura', v: 'Até 250 m²' },
        { k: 'Funcionalidades', v: 'MU-MIMO 8×8, OFDMA, QoS adaptativo' },
      ],
      features: ['Wi-Fi 6 10 Gbps', 'Tri-Band', 'WPA3 Security', 'OFDMA', '2.5G WAN Port', 'AiProtection'],
      rating: 4.5, reviews: 224,
    },
    /* ── Fallback genérico ── */
    {
      match: /.*/,
      brand: 'BUCAPE-TECH', cat: 'Novidade',
      desc: 'Produto novo em loja com garantia original e suporte técnico dedicado. Certificado e testado pelos nossos técnicos especializados para garantir a melhor experiência.',
      specs: [
        { k: 'Disponibilidade', v: 'Em stock em Luanda' },
        { k: 'Garantia', v: '12 meses — suporte local' },
        { k: 'Origem', v: 'Produto original certificado' },
        { k: 'Entrega', v: 'Entrega rápida em Luanda' },
      ],
      features: ['Produto Original', 'Garantia 12 meses', 'Suporte Técnico', 'Stock Disponível'],
      rating: 4.5, reviews: 0,
    },
  ];

  function getNovidadeDetails(name) {
    for (var i = 0; i < novidadeSpecsDB.length; i++) {
      if (novidadeSpecsDB[i].match.test(name)) return novidadeSpecsDB[i];
    }
    return novidadeSpecsDB[novidadeSpecsDB.length - 1];
  }

  /* Modal enriquecido para produtos de Novidades (sem id numérico) */
  function openNovidadeModal({ name, imgSrc, price }) {
    var overlay  = document.getElementById('productModalOverlay');
    var details  = getNovidadeDetails(name);

    /* Galeria */
    var mainImg  = document.getElementById('pmMainImg');
    var thumbsEl = document.getElementById('pmThumbs');
    mainImg.src = imgSrc;
    mainImg.alt = name;
    thumbsEl.innerHTML = '<button class="pm-thumb active"><img src="' + imgSrc + '" alt="' + name + '"></button>';

    document.getElementById('pmNavPrev').onclick = null;
    document.getElementById('pmNavNext').onclick = null;
    document.getElementById('pmSaleRibbon').style.display = 'none';

    /* Info */
    document.getElementById('pmBrand').textContent   = details.brand;
    document.getElementById('pmCat').textContent     = details.cat;
    document.getElementById('pmName').textContent    = name;

    document.getElementById('pmStars').innerHTML         = starsHTML(details.rating);
    document.getElementById('pmReviewCount').textContent = details.reviews > 0
      ? details.rating.toFixed(1) + ' (' + details.reviews + ' avaliações)'
      : 'Novo produto';

    document.getElementById('pmPrice').textContent       = price || '—';
    document.getElementById('pmPriceOrig').style.display = 'none';
    document.getElementById('pmDiscountPct').style.display = 'none';

    document.getElementById('pmDesc').textContent = details.desc;

    document.getElementById('pmRef').textContent     = '—';
    document.getElementById('pmCatMeta').textContent = details.cat;

    /* Botão carrinho */
    var cartBtn = document.getElementById('pmAddCart');
    cartBtn.onclick = closeProductModal;

    /* Wishlist */
    var wishBtn = document.getElementById('pmWish');
    wishBtn.classList.remove('active');
    wishBtn.querySelector('i').className = 'far fa-heart';
    wishBtn.onclick = function () {
      wishBtn.classList.toggle('active');
      wishBtn.querySelector('i').className = wishBtn.classList.contains('active') ? 'fas fa-heart' : 'far fa-heart';
    };

    /* Specs */
    var featIcons = ['fa-check-circle','fa-bolt','fa-wifi','fa-shield-alt','fa-star','fa-microchip','fa-mobile-alt','fa-desktop','fa-tachometer-alt','fa-battery-full'];
    document.getElementById('pmSpecs').innerHTML = (details.specs || []).map(function (s) {
      return '<div class="pm-spec-row"><span class="pm-spec-key">' + s.k + '</span><span class="pm-spec-val">' + s.v + '</span></div>';
    }).join('');

    document.getElementById('pmFeatures').innerHTML = (details.features || []).map(function (f, i) {
      return '<span class="pm-feature-chip"><i class="fas ' + featIcons[i % featIcons.length] + '"></i>' + f + '</span>';
    }).join('');

    buildReviews({ rating: details.rating, reviews: details.reviews, userReviews: [] });

    /* Tabs */
    overlay.querySelectorAll('.pm-tab').forEach(function (tab) {
      tab.onclick = function () {
        overlay.querySelectorAll('.pm-tab').forEach(function (t) { t.classList.remove('active'); });
        overlay.querySelectorAll('.pm-tab-panel').forEach(function (p) { p.classList.remove('active'); });
        tab.classList.add('active');
        var panelId = 'pmTab' + tab.dataset.tab.charAt(0).toUpperCase() + tab.dataset.tab.slice(1);
        var panel = document.getElementById(panelId);
        if (panel) panel.classList.add('active');
      };
    });
    overlay.querySelectorAll('.pm-tab').forEach(function (t, i) { t.classList.toggle('active', i === 0); });
    overlay.querySelectorAll('.pm-tab-panel').forEach(function (p, i) { p.classList.toggle('active', i === 0); });

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

    /* ============================================================
     6. EVENT LISTENERS GLOBAIS
     ============================================================ */
  function setupModalListeners() {
    document.getElementById('pmClose').addEventListener('click', closeProductModal);

    document.getElementById('productModalOverlay').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) closeProductModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeProductModal();
    });
  }

  /* ============================================================
     7. INIT
     ============================================================ */
  function init() {
    injectModalHTML();
    setupModalListeners();

    /* Aguardar que o main.js renderize os cards antes de os patchar */
    const CHECK_INTERVAL = 300; // ms
    const MAX_WAIT = 5000;      // ms máximo
    let waited = 0;

    const checkCards = setInterval(() => {
      const track = document.getElementById('infCarouselTrack');
      if (track && track.querySelectorAll('.product-card').length > 0) {
        clearInterval(checkCards);
        patchProductCards();

        /* Observar novos cards adicionados dinamicamente (loop de scroll) */
        const observer = new MutationObserver(() => patchProductCards());
        observer.observe(track, { childList: true });
      }
      waited += CHECK_INTERVAL;
      if (waited >= MAX_WAIT) clearInterval(checkCards);
    }, CHECK_INTERVAL);

    /* Também patchar novidades quando disponíveis */
    const checkNovidades = setInterval(() => {
      const grid = document.getElementById('novidadesGrid');
      if (grid && grid.querySelectorAll('.nov-card').length > 0) {
        clearInterval(checkNovidades);
        patchProductCards();
      }
      waited += CHECK_INTERVAL;
      if (waited >= MAX_WAIT) clearInterval(checkNovidades);
    }, CHECK_INTERVAL);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Expor globalmente se necessário */
  window.openProductModal = openProductModal;
  window.closeProductModal = closeProductModal;

})();